import * as React from "react";
import BlogCard from "@/components/Blog/BlogCard";
import { getPosts } from "@/sanity/post";
import ItsEmpty from "@/components/ItsEmpty";

export default async function Blog() {
    const posts = await getPosts();
    return (
        <div className="">
            <div className=" py-6 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full ">
                {posts.length != 0 ? (
         
                    <>
                        {posts.map((post) => (
                            <BlogCard {...post}/>
                        ))}
                    </>
                ) : (
                    <ItsEmpty />
                )}
            </div>
        </div>
    );
}
