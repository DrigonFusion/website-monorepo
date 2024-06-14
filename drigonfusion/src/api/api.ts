import "server-only";
import { currentUser } from "@clerk/nextjs/server";
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

export const getUserData = {
  pfp: {
    get: async () => {
      const user = await currentUser();
      if (!user) {
        return null;
      } else {
        return user.imageUrl;
      }
    },
  },
  name: {
    get: {
      first: async () => {
        const user = await currentUser();
        if (!user) {
          return null;
        } else {
          return user.firstName;
        }
      },
      last: async () => {
        const user = await currentUser();
        if (!user) {
          return null;
        } else {
          return user.lastName;
        }
      },
      full: async () => {
        const user = await currentUser();
        if (!user) {
          return null;
        } else {
          return user.fullName;
        }
      },
      nickname: async () => {
        const user = await currentUser();
        if (!user) {
          return null;
        } else {
          return user.username;
        }
      },
    }
  }
}