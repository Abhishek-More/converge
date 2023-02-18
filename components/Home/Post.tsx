import React from "react";
import { useState, useRef, useEffect } from "react";
import { HiOutlineChatAlt } from "react-icons/hi";

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

export default function Post(props: PostProps) {
  const [voices, speak] = useSpeechSynthesis();
  const [currentVoice, setCurrentVoice] = useState();
  const [text, setText] = useState(props.content);

  useEffect(() => {
    if (!currentVoice) {
      setCurrentVoice(voices.filter((v) => v.default)[0] || voices[0]);
    }
  }, [voices]);

  const handleSpeak = () => {
    speak(text, currentVoice);
  };

  return (
    <div
      onClick={() => handleSpeak()}
      className="flex bg-white py-8 px-6 w-[30vw] border-[1px] border-gray-200 shadow-md rounded-lg"
    >
      <div className="w-full">
        <div className="flex w-full justify-between items-center">
          <p className="text-2xl font-semibold">{props.title}</p>
          <p className="text-sm px-4 py-2 bg-[#D1C0E0] rounded-full">
            {props.emotion}
          </p>
        </div>
        <p>{props.author}</p>
        <p className="text-sm">{props.time}</p>
        <div className="mt-8">{props.content}</div>
        <div className="w-1/2">
          <div className="flex items-center gap-2 mt-8 px-4 py-2 rounded-md bg-gray-200 max-w-[160px]">
            <HiOutlineChatAlt />
            <p className="text-sm">Add Response</p>
          </div>
        </div>
      </div>
    </div>
  );
}
