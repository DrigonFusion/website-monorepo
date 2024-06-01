import Link from "next/link";
import { db } from "~/server/db";

export default async function HomePage() {
  const blogPosts = await db.query.blogPosts.findMany();
  const newsPosts = await db.query.newsPosts.findMany();
  const gamingPosts = await db.query.gamingPosts.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          CMS
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div>
        <h1>Blog Posts</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex flex-col bg-slate-800 p-4 rounded-xl">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>{post.authors}</p>
            </div>
          ))}
        </div>
        <h1>News Posts</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          {newsPosts.map((post) => (
            <div key={post.id} className="flex flex-col bg-slate-800 p-4 rounded-xl">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>{post.authors}</p>
            </div>
          ))}
        </div>
        <h1>Gaming Posts</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          {gamingPosts.map((post) => (
            <div key={post.id} className="flex flex-col bg-slate-800 p-4 rounded-xl">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>{post.authors}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}