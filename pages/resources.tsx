import Friend from "@/components/Friend/friend";
import Navbar from "@/components/Navbar/Navbar";
import Resource from "@/components/Resources/Resource";
import ReactAudioPlayer from "react-audio-player";

export default function Home() {
  return (
    <div className="h-full bg-[#bfd4db] py-16">
      <Navbar />
      <p className="text-[70px] font-bold text-[#043F74] mt-16 ml-60">
        Resources
      </p>
      <p className="text-[26px] ml-60">Explore our library of resources for</p>
      <p className="text-[26px] ml-60">
        neurodivergent students and their families.
      </p>
      <Resource
        title="Neurodiversity TEDx Talk"
        author="by Elisabeth Wiklander"
        link="https://www.youtube.com/watch?v=Qvvrme5WIwA"
      />
      <Resource
        title="What Does It Mean To Be Neurodivergent?"
        author="by Erin Gregory"
        link="https://www.forbes.com/health/mind/what-is-neurodivergent/"
      />
      <Resource
        title="What Does Neurotypical Mean?"
        author="by Lisa Jo Rudy"
        link="https://www.verywellhealth.com/what-does-it-mean-to-be-neurotypical-260047"
      />
      <hr className="border-2 border-[#86929d] my-32 mx-auto w-1/3" />
      <div id="audio-players" className="text-center mx-auto">
        <p>White Noise</p>
        <ReactAudioPlayer src="audio/white_noise.mp3" controls loop className="block mx-auto mb-8" />
        <p>Brown Noise</p>
        <ReactAudioPlayer src="audio/brown_noise.mp3" controls loop className="block mx-auto mb-8" />
        <p>Nature Sounds</p>
        <ReactAudioPlayer src="audio/nature.mp3" controls loop className="block mx-auto mb-8" />
      </div>
      <hr className="border-2 border-[#86929d] my-32 mx-auto w-1/3" />
      <h2 className="text-center font-bold text-3xl">Fidget Toys</h2>
      <Friend />
    </div>
  );
}
