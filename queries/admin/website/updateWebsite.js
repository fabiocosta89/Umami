import { runQuery } from 'lib/queries';
import prisma from 'lib/db';

export async function updateWebsite(website_id, data) {
  return runQuery(
    prisma.website.update({
      where: {
        website_id,
      },
      data,
    }),
  );
}
