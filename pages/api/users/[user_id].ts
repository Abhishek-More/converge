import type { NextApiRequest, NextApiResponse } from 'next';

import { Nullable } from '../../../lib/common';
import { User } from '@prisma/client';
import { getToken, JWT } from 'next-auth/jwt';

import prisma from '../../../lib/prisma';
/*
 * GET Request: Returns a user based on the id specified in the route
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ user: Nullable<User> }>
) {
  const { user_id } = req.query;
  const token: Nullable<JWT> = await getToken({ req });

  if (!token) {
    res.status(401);
    res.send({ user: null });
    return;
  }
  
  if (!user_id || typeof(user_id) !== "string")
  {
    res.status(404);
    res.send({ user: null });
    return;
  }

  const user = await prisma.user.findUnique({
    where: {
      id: user_id,
    },
    include: {
      posts: true,
    },
  });

  if (user)
  {
    res.status(200);
  }
  else
  {
    res.status(404);
  }
  res.send({ user: user });
}
