import Link from "next/link";
import { db } from "~/server/db";

export default async function HomePage() {
  const blogPosts = await db.query.blogPosts.findMany();
  const newsPosts = await db.query.newsPosts.findMany();
  const gamingPosts = await db.query.gamingPosts.findMany();
  return (
    <main>

    </main>
  );
}
