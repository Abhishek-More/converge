import type { NextApiRequest, NextApiResponse } from 'next';

import { Nullable } from '../../../lib/common';
import { Community, User } from '@prisma/client';
import { getToken, JWT } from 'next-auth/jwt';

import prisma from '../../../lib/prisma';

/*
 * GET Request: Returns all communities
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ communities: Community[] }>
) {
  const token: Nullable<JWT> = await getToken({ req });

  if (!token) {
    res.status(401);
    res.send({ communities: [] });
    return;
  }

  const communities = await prisma.community.findMany({
    orderBy: {
      name: 'asc',
    },
  });

  res.status(200);
  res.send({ communities: communities });
}
