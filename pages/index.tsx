import Head from "next/head";
import { GetServerSideProps } from "next";

import useSWR from "swr";
import { fetcher } from "../lib/common";
import { signOut } from "next-auth/react";

import { Session, getServerSession } from "next-auth";
import authOptions from "./api/auth/[...nextauth]";
import { Nullable } from "../lib/common";

import axios from "axios";

async function testCreatePost ()
{
  let testPost = {
    anonymous: true,
    communityId: "cle9ehvqj0000ugukfuy0oc26",
    content: "this is a test post!",
    tags: ["test"],
    title: "Test Post",
    toneIndicators: [],
    toneIndicatorsStartStop: []
  }

  const request = await axios.post('/api/posts/create', testPost);
  const data = await request.data;
  console.log("done!");
  console.log(request.status);
}

async function testCreateCommunity ()
{
  let testCommunity = {
    description: "this is a test community! poggchamp!!!!1",
    name: "Test Community"
  }

  const request = await axios.post('/api/communities/create', testCommunity);
  const data = await request.data;
  console.log("done!");
  console.log(request.status);
}

export default function Home() {
  return (
    //Starter code for a landing page using tailwind
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>

        <button onClick={testCreatePost} className="p-6 border-black border-4 m-5 font-2xl">test create post</button>
        <button onClick={testCreateCommunity} className="p-6 border-black border-4 m-5 font-2xl">test create community</button>

        <div>
          <button onClick={() => signOut()}>Sign out!</button>
        </div>
      </main>
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
