import Friend from "@/components/Friend/friend";
import Navbar from "@/components/Navbar/Navbar";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import Wave from "react-wavify";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession(ctx);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Login() {
  const [color, setColor] = useState(1);
  return (
    <div
      className={`bg-1second h-screen flex flex-col items-center flex-1 px-20 overflow-y-hidden overflow-hidden`}
    >
      <Navbar />

      <div className="grid grid-cols-2 ">
        <div className="px-8">
          <h1 className=" leading-[80px] text-[80px] font-bold text-1first mt-60 font-poppins w-[650px] text-left">
            <p>Education that understands you.</p>
          </h1>

          <div className="leading-[30px] text-left pt-5 pb-12 text-[26px] text-1first font-poppins">
            <p>
              Fostering a virtual environment that empowers students to learn,
              connect, and grow -- together
            </p>
          </div>

          <div className="flex justify-start gap-4">
            <button
              className=" px-8 bg-1first  text-white font-semibold rounded-lg font-poppins"
              onClick={() => signIn("google")}
            >
              Get Started
            </button>
            <Link href="/resources">
              <p className="py-2 px-8 text-1first border-2 border-1first font-semibold rounded-lg">
                Learn More
              </p>
            </Link>
          </div>

          {/* <div className="absolute hidden bottom-0 right-0 space-x-1 p-2">
            <button
              className="px-4 py-4 rounded-full bg-4first hover:bg-4second"
              onClick={() => setColor(4)}
            ></button>
            <button
              className="px-4 py-4 rounded-full bg-5first hover:bg-5second"
              onClick={() => setColor(5)}
            ></button>
            <button
              className="px-4 py-4 rounded-full bg-2first hover:bg-2second"
              onClick={() => setColor(2)}
            ></button>
            <button
              className="px-4 py-4 rounded-full bg-1first hover:bg-1second"
              onClick={() => setColor(1)}
            ></button>
            <button
              className="px-4 py-4 rounded-full bg-3first hover:bg-3second"
              onClick={() => setColor(3)}
            ></button>
          </div> */}
        </div>
        <div className="py-48 px-44">
          <Friend />
        </div>
      </div>

      <div className="bottom-0 absolute w-screen translate-y-24 opacity-75">
        <Wave fill="url(#gradient)">
          <defs>
            <linearGradient id="gradient" gradientTransform="0">
              <stop offset="10%" stopColor="#2a5ce5" />
              <stop offset="90%" stopColor="#83fff7" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
    </div>
  );
}
