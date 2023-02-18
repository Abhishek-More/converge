import Head from "next/head";
import { GetServerSideProps } from "next";

import useSWR from "swr";
import { fetcher } from "../lib/common";
import { signOut } from "next-auth/react";

import { Session, getServerSession } from "next-auth";
import authOptions from "./api/auth/[...nextauth]";
import { Nullable } from "../lib/common";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <p>Hello world!</p>
    </div>
  );
}
