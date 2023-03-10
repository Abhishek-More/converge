import React from "react";
import { useState, useRef, useEffect } from "react";
import { HiMicrophone, HiOutlineChatAlt, HiSpeakerphone } from "react-icons/hi";
import axios from "axios";

type PostProps = {
  title: string;
  author: string;
  content: string;
  emotion: string;
  time: string;
};

const useSpeechSynthesis = () => {
  const [voices, setVoices] = useState([]);
  const synth = useRef();

  const updateVoices = () => {
    setVoices(synth.current.getVoices());
  };

  const speak = (
    text: string,
    voice: SpeechSynthesisUtterance.voice,
    pitch = 1,
    rate = 1
  ) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.pitch = pitch;
    utterance.rate = rate;
    synth.current.speak(utterance);
  };

  useEffect(() => {
    if (typeof window !== "object" || !window.speechSynthesis) return;
    synth.current = window.speechSynthesis;
    synth.current.onvoiceschanged = updateVoices;
    updateVoices();

    return () => {
      synth.current.onvoiceschanged = null;
    };
  }, []);

  return [voices, speak];
};

export default function PostBox(props: PostProps) {
  const [voices, speak] = useSpeechSynthesis();
  const [currentVoice, setCurrentVoice] = useState();
  const [text, setText] = useState(props.content);
  const [summarized, setSummarized] = useState(false);

  useEffect(() => {
    if (!currentVoice) {
      setCurrentVoice(voices.filter((v) => v.default)[0] || voices[0]);
    }
  }, [voices]);

  const handleSpeak = () => {
    speak(text, currentVoice);
  };

  async function handleSummary() {
    //axios post request to summarize text
    if (!summarized) {
      const sarcasmResponse = await axios
        .post("http://127.0.0.1:8000/summary/", {
          text: text,
        })
        .then((res) => {
          console.log(res.data);
          setText(res.data);
          setSummarized(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setText(props.content);
      setSummarized(false);
    }
  }

  return (
    <div className="flex bg-white py-8 px-6 w-[40vw] border-[1px] border-gray-200 shadow-md rounded-lg">
      <div className="w-full">
        <div className="flex w-full justify-between items-center">
          <p className="text-2xl font-semibold">{props.title}</p>
          <p className="text-sm px-4 py-2 bg-[#D1C0E0] rounded-full">
            {props.emotion}
          </p>
        </div>
        <p>{props.author}</p>
        <p className="text-sm">{props.time}</p>
        <div className="mt-8">{text}</div>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 mt-8 px-4 py-2 rounded-md bg-gray-200 max-w-[160px]">
              <HiOutlineChatAlt />
              <p className="text-sm">Add Response</p>
            </div>
            <div
              onClick={() => handleSummary()}
              className="flex cursor-pointer items-center gap-2 mt-8 px-4 py-2 rounded-md bg-gray-200 max-w-[250px]"
            >
              <HiOutlineChatAlt />
              <p className="text-sm">Summarize Content</p>
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <div
              onClick={() => handleSpeak()}
              className="flex cursor-pointer items-center gap-2 mt-8 px-4 py-2 rounded-md bg-gray-200 max-w-[160px]"
            >
              <HiSpeakerphone />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
