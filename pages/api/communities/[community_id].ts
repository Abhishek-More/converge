import type { NextApiRequest, NextApiResponse } from 'next';

import { Nullable } from '../../../lib/common';
import { Community, User } from '@prisma/client';
import { getToken, JWT } from 'next-auth/jwt';

import prisma from '../../../lib/prisma';
/*
 * GET Request: Returns a community based on the id specified in the route
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ community: Nullable<Community> }>
) {
  const { community_id } = req.query;
  const token: Nullable<JWT> = await getToken({ req });

  if (!token) {
    res.status(401);
    res.send({ community: null });
    return;
  }
  
  if (!community_id || typeof(community_id) !== "string")
  {
    res.status(404);
    res.send({ community: null });
    return;
  }

  const community = await prisma.community.findUnique({
    where: {
      id: community_id,
    },
    include: {
      posts: true,
    },
  });

  if (community)
  {
    res.status(200);
  }
  else
  {
    res.status(404);
  }
  res.send({ community: community });
}
