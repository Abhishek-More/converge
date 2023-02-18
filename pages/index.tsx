import { GetServerSideProps } from "next";

import useSWR from "swr";
import { fetcher } from "../lib/common";
import { signOut } from "next-auth/react";

import { Session, getServerSession } from "next-auth";
import authOptions from "./api/auth/[...nextauth]";
import { Nullable } from "../lib/common";
import Navbar from "@/components/Navbar/Navbar";
import Post from "@/components/Home/Post";

export default function Home() {
  //get all posts from /api/posts/all using react-swr
  const { data, error } = useSWR("/api/posts/all", fetcher);

  return (
    <div className="min-h-screen">
      <div className="h-24 w-screen bg-gray-200"></div>
      <div className="flex justify-between">
        <div className="w-[10vw] flex-shrink-0 flex-grow-0">
          <div className="bg-white bg"></div>
        </div>
        <div className="w-[30vw] flex-shrink-0">
          <div className="flex flex-col gap-12 mt-4">
            <Post
              title="312 Help with Muxes"
              content="I need help understanding Muxes for CSCE 312. Can someone help me?"
              time="1h ago"
              author="Naveen Iyer"
              emotion="Frustration: 90%"
            />
            <Post
              title="312 Help with Muxes"
              content="I need help understanding Muxes for CSCE 312. Can someone help me?"
              time="1h ago"
              author="Naveen Iyer"
              emotion="Frustration: 90%"
            />
            <Post
              title="312 Help with Muxes"
              content="I need help understanding Muxes for CSCE 312. Can someone help me?"
              time="1h ago"
              author="Naveen Iyer"
              emotion="Frustration: 90%"
            />
            <Post
              title="312 Help with Muxes"
              content="I need help understanding Muxes for CSCE 312. Can someone help me?"
              time="1h ago"
              author="Naveen Iyer"
              emotion="Frustration: 90%"
            />
            <Post
              title="312 Help with Muxes"
              content="I need help understanding Muxes for CSCE 312. Can someone help me?"
              time="1h ago"
              author="Naveen Iyer"
              emotion="Frustration: 90%"
            />
          </div>
        </div>
        <div className="w-[10vw]">hi</div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session: Nullable<Session> = await getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    console.log("No session found!");
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
