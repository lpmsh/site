import * as React from "react";
import BlogCard from "@/components/Blog/BlogCard";
import { getPosts } from "@/sanity/post";
import ItsEmpty from "@/components/ItsEmpty";
import { Header } from "@/components/Nav/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/blog",
  },
  title: {
    default: "Blog | LPM",
    template: "%s | LPM",
  },
  description: "Liam Monaghan's Blog",
};

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col items-center w-full">
        <div className="text-4xl font-bold text-left w-full">Blog</div>
        <div className=" py-6  flex flex-col gap-y-4 w-full ">
          {posts.length != 0 ? (
            <>
              {posts.map((post) => (
                <BlogCard {...post} />
              ))}
            </>
          ) : (
            <ItsEmpty />
          )}
        </div>
      </div>
    </div>
  );
}
