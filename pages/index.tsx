import { GetServerSideProps } from "next";

import useSWR from "swr";
import { fetcher, getTimeDifferenceString } from "../lib/common";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { signOut } from "next-auth/react";

import { Session, getServerSession } from "next-auth";
import authOptions from "./api/auth/[...nextauth]";
import { Nullable } from "../lib/common";
import Navbar from "@/components/Navbar/Navbar";
import { Post } from "@prisma/client";
import PostBox from "@/components/Home/PostBox";
import { useState } from "react";
import { HiChevronDoubleDown, HiChevronDown, HiPlus } from "react-icons/hi";
import AudioPlayer from "@/components/AudioPlayer";

import axios from "axios";
import Link from "next/link";

async function testCreatePost() {
  let testPost = {
    anonymous: true,
    communityId: "cle9ehvqj0000ugukfuy0oc26",
    content: "this is a test post!",
    tags: ["test"],
    title: "Test Post",
    toneIndicators: [],
    toneIndicatorsStartStop: [],
  };

  const request = await axios.post("/api/posts/create", testPost);
  const data = await request.data;
  console.log("done!");
  console.log(request.status);
}

async function testCreateCommunity() {
  let testCommunity = {
    description: "this is a test community! poggchamp!!!!1",
    name: "Test Community",
  };

  const request = await axios.post("/api/communities/create", testCommunity);
  const data = await request.data;
  console.log("done!");
  console.log(request.status);
}

export default function Home() {
  //get all posts from /api/posts/all using react-swr
  const { data, error } = useSWR("/api/posts/all", fetcher);
  const [value, setValue] = useState("1");

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data.posts);
  const arr = data.posts;

  return (
    <div className="min-h-screen ">
      <Navbar loggedIn />
      <div className="fixed left-0 w-[20vw] h-full px-8 border-r-2">
        <div className="flex items-center gap-2 mb-4 mt-24">
          <p className="text-2xl font-semibold">Your Communities</p>
          <HiChevronDown className="mt-1" />
        </div>
        <RadioGroup onChange={setValue} value={value}>
          <div className="flex flex-col gap-2">
            <Radio value="1">CSCE 312</Radio>
            <Radio value="2">ARCH 291</Radio>
            <Radio value="3">MATH 151</Radio>

            <div id="audio-players" className="-ml-3 mt-48">
              <AudioPlayer soundName="White Noise" audioFile="audio/white_noise.mp3" />
              <AudioPlayer soundName="Brown Noise" audioFile="audio/brown_noise.mp3" />
              <AudioPlayer soundName="Nature Sounds" audioFile="audio/nature.mp3" />
            </div>
          </div>
        </RadioGroup>
        <div
          onClick={() => signOut()}
          className="cursor-pointer absolute bottom-0 left-0 m-8 px-8 py-2 bg-1first text-white rounded-md"
        >
          Sign out
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="w-[40vw] flex-shrink-0 mt-32">
          <div className="flex justify-end items-center">
            <div className="bg-1first py-2 px-4 rounded-md text-gray-100">
              <Link href="/new">New Post</Link>
            </div>
          </div>

          <div className="flex flex-col gap-12 mt-4">
            {arr.map((post: Post, index: number) => (
              <PostBox
                key={index}
                title={post.title}
                content={post.content}
                time={getTimeDifferenceString(post.datetime)}
                author={post.author?.name.toString() || "Anonymous"}
                emotion={post.sarcasmProb.toString() || "Frustration: 90%"}
              />
            ))}
          </div>
        </div>
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
