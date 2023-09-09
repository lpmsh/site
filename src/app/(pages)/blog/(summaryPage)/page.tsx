import * as React from "react";
import { allPosts } from "contentlayer/generated";
import { sortPostsNewestToOldest } from "@/utils/BlogUtils";
import BlogCard from "@/components/Blog/BlogCard";
import { getPost, getPosts } from "@/sanity/post";
import ItsEmpty from "@/components/ItsEmpty";
import { SanityImageComponent } from "@/sanity/utils/SanityImageComponent";

export default async function Blog() {
    const posts = await getPosts();
    return (
        <div className="md:px-12">
            {/* <div className="text-4xl font-bold pt-4">All Posts</div> */}
            <div className=" py-6 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full ">
                {posts.length != 0 ? (
                    // sortPostsNewestToOldest(allPosts).map((post) => (
                    //     <div key={post.slug}>
                    //         <BlogCard
                    //             title={post.title}
                    //             date={post.date}
                    //             icon={post.icon}
                    //             slug={post.slug}
                    //             categories={post.categories}
                    //         />
                    //     </div>
                    // ))
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
