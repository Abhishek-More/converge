import Navbar from "@/components/Navbar/Navbar";
import Resource from "@/components/Resources/Resource";

export default function Home() {
  return (
    <div className="h-full bg-[#bfd4db]">
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
    </div>
  );
}
