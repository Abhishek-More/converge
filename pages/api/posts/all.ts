import type { NextApiRequest, NextApiResponse } from 'next';

import { Nullable } from '../../../lib/common';
import { Post, User } from '@prisma/client';
import { getToken, JWT } from 'next-auth/jwt';

import prisma from '../../../lib/prisma';

/*
 * GET Request: Returns all posts
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ posts: Post[] }>
) {
  const token: Nullable<JWT> = await getToken({ req });

  if (!token) {
    res.status(401);
    res.send({ posts: [] });
    return;
  }

  const posts = await prisma.post.findMany({
    orderBy: {
      title: 'asc',
    },
  });

  res.status(200);
  res.send({ posts: posts });
}
