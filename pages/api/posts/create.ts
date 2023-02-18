import type { NextApiRequest, NextApiResponse } from "next";

import { Nullable } from "../../../lib/common";
import { Post, User } from "@prisma/client";
import { getToken, JWT } from "next-auth/jwt";
import axios from "axios";

import prisma from "../../../lib/prisma";

/*
 * GET Request: Returns all posts
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  const token: Nullable<JWT> = await getToken({ req });

  if (!token) {
    res.status(401);
    res.send({});
    return;
  }

  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const user = await prisma.user.findUnique({
    where: {
      email: token?.email || "",
    },
    include: {
      posts: true,
    },
  });

  if (!user || user == null) {
    res.status(404).send("you are not real");
    return;
  }

  // not needed in NextJS v12+
  const body = req.body;

  try {
    //make an axios post request to the backend at localhost:5000/sarcasm/

    const sarcasmResponse = await axios.post("http://127.0.0.1:8000/sarcasm/", {
      text: body.content,
    });

    console.log(sarcasmResponse.data);

    let postObject = {
      anonymous: body.anonymous,
      authorId: user.id,
      communityId: body.communityId,
      content: body.content,
      datetime: new Date(),
      sarcasmProb: sarcasmResponse.data || "neutral", // TODO MAKE THIS REALLY REAL
      tags: body.tags,
      title: body.title,
      toneIndicators: body.toneIndicators,
      toneIndicatorsStartStop: body.toneIndicatorsStartStop,
    };

    const createPost = await prisma.post.create({ data: postObject });
  } catch {
    res.status(400);
    res.send({});
    return;
  }

  // the rest of your code

  //   const posts = await prisma.post.findMany({
  //     orderBy: {
  //       title: 'asc',
  //     },
  //   });

  res.status(200);
  res.send({});
}
