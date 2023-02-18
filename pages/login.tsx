import Navbar from "@/components/Navbar/Navbar";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

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
      className={`bg-1second h-screen flex flex-col items-center flex-1 px-20 text-center`}
    >
      <Navbar />

      <h1 className="leading-[80px] text-[70px] font-bold align-middle text-1first mt-60">
        <p>Education that</p>
        <p>understands you.</p>
      </h1>

      <div className="leading-[30px] align-middle pt-5 pb-12 text-[26px]">
        <p>Empowering students to learn, connect, and</p>
        <p>grow together</p>
      </div>

      <div className="flex space-x-5">
        <button
          className="py-2 px-8 bg-1first text-white font-semibold rounded-lg"
          onClick={() => signIn("google")}
        >
          Get Started
        </button>
        <Link href="/resources">
          <p className="py-2 px-8 text-1first bg-1second border-2 border-1first font-semibold rounded-lg">
            Learn More
          </p>
        </Link>
      </div>

      <div className="absolute hidden bottom-0 right-0 space-x-1 p-2">
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
      </div>
    </div>
  );
}
