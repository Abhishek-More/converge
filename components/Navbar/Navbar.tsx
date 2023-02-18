import React from "react";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Navbar(props: { loggedIn: boolean }) {
  const [color, setColor] = useState(1);

  return (
    <div
      className={`${
        props.loggedIn ? "bg-white border-b-2 border-gray-100" : "bg-1second"
      }
      top-0 z-50 flex w-screen justify-between fixed px-8 py-4 items-center `}
    >
      <p className={`text-2xl text-1first font-semibold`}>Converge</p>
      <a
        className={`text-xl py-2 px-7 bg-1first text-white font-semibold rounded-lg shadow-md`}
        onClick={() => signIn("google")}
      >
        {props.loggedIn ? "New Post" : "Sign Up"}
      </a>
    </div>
  );
}
