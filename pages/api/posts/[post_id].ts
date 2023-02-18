import type { NextApiRequest, NextApiResponse } from 'next';

import { Nullable } from '../../../lib/common';
import { Community, Post, User } from '@prisma/client';
import { getToken, JWT } from 'next-auth/jwt';

import prisma from '../../../lib/prisma';
/*
 * GET Request: Returns a community based on the id specified in the route
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ post: Nullable<Post> }>
) {
  const { post_id } = req.query;
  const token: Nullable<JWT> = await getToken({ req });

  if (!token) {
    res.status(401);
    res.send({ post: null });
    return;
  }
  
  if (!post_id || typeof(post_id) !== "string")
  {
    res.status(404);
    res.send({ post: null });
    return;
  }

  const post = await prisma.post.findUnique({
    where: {
      id: post_id,
    }
  });

  if (post)
  {
    res.status(200);
  }
  else
  {
    res.status(404);
  }
  res.send({ post: post });
}
