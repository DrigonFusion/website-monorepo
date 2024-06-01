"use client";
import Link from "next/link";
import { type FormEvent } from "react";
import { db } from "~/server/db";

export default function HomePage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white p-5">
      <div>
        <h1>New Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="content">Content (allows MD)</label>
            <textarea
              name="content"
              id="content"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              name="tags"
              id="tags"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              id="category"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              id="author"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              className="w-full p-2 border border-gray-300 rounded-md"
            />  
          </div>
          <div className="flex flex-col">
            <label htmlFor="slug">Slug</label>
            <input
              type="text"
              name="slug"
              id="slug"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              name="date"
              id="date"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
