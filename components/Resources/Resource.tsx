import React from "react";

export default function Resource(props: {
  title: string;
  author: string;
  link?: string;
}) {
  return (
    <div className="flex items-center justify-between border-4 border-[#043F74] h-36 w-8/12 p-8 mt-10 ml-60 rounded-xl flex-justify-between">
      <div>
        <p className="text-[28px] font-bold">{props.title}</p>
        <p className="text-[20px]">{props.author}</p>
      </div>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="border-4 border-[#043F74] p-3 rounded-xl leading-[26px] text-[#ffffff] bg-[#043F74]"
      >
        Learn More
      </a>
    </div>
  );
}
