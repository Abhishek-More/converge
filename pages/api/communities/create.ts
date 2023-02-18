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
  res: NextApiResponse<{ }>
) {
  const token: Nullable<JWT> = await getToken({ req });

  if (!token) {
    res.status(401);
    res.send({  });
    return;
  }


    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' });
      return;
    }
  

    // not needed in NextJS v12+
    const body = req.body;
  
    // the rest of your code
    const createCommunity = await prisma.post.create({ data: body })

//   const posts = await prisma.post.findMany({
//     orderBy: {
//       title: 'asc',
//     },
//   });

  res.status(200);
  res.send({ });
}





