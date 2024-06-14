import "server-only";

import { db } from '~/server/db/index';

export async function getPaginatedBlog(page = 1, limit = 10) {
  const offset = (page - 1) * limit;

  // const posts = await db.select('blog', {
  //   limit,
  //   offset,
  //   orderBy: { created_at: 'desc' }
  // });

  const posts = await db.query.blogPosts.findMany({
    limit,
    offset,
    orderBy: (blogPosts, { asc }) => [asc(blogPosts.id)],
  });

  return posts;
}