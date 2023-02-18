import { GetServerSideProps } from "next";

import useSWR from "swr";
import { fetcher, getTimeDifferenceString } from "../lib/common";
import { signOut } from "next-auth/react";

import { Session, getServerSession } from "next-auth";
import authOptions from "./api/auth/[...nextauth]";
import { Nullable } from "../lib/common";
import PostBoxNew from "@/components/Home/PostBoxNew";

import axios from "axios";

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

export default function New() {
  return (
    <div className="min-h-screen">
      <div className="h-24 w-screen bg-gray-200"></div>
      <div className="flex justify-center mt-16">
        <div className="w-[40vw] flex-shrink-0">
          <div className="flex flex-col gap-12 mt-4">
            <PostBoxNew />
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
