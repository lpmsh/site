import * as React from "react";
import {
    IconBrandTwitter,
    IconBrandGithub,
    IconBrandInstagram,
} from "@tabler/icons-react";
import A from "@/components/Anchor";
import BlogCard from "@/components/Blog/BlogCard";
import { allPosts } from "contentlayer/generated";
import { sortPostsNewestToOldest } from "@/utils/BlogUtils";
import Nav from "@/components/Nav/Nav";
import ItsEmpty from "@/components/ItsEmpty";

function Home() {
    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center bg-background">
            <div className="container mx-auto p-4 min-h-screen">
                <div className="flex justify-center items-center ">
                    <div className="  w-full lg:max-w-[66.6667%] flex flex-col  items-start gap-y-8 px-12">
                        <Nav />
                        <div className="text-xl font-normal self-center justify-self-center">
                            Hey!
                            <span className="font-bold">
                                {" "}
                                I&apos;m Liam.
                            </span>{" "}
                            I&apos;m a Christian, student, developer,{" "}
                            <A href="/photos">photographer</A>, roboticist,
                            Pittsburgh and Ohio State sports fan, and an avid
                            movie and music consumer. You can usually find me
                            coding, with my{" "}
                            <A href="https://frc8592.org">
                                awesome robotics team
                            </A>
                            , <A href="/blog">writing about something</A>, or
                            hanging out with friends.
                        </div>
                        <div className="pt-6 text-2xl font-semibold">
                            Recent Blog Posts
                        </div>
                        {sortPostsNewestToOldest(allPosts.slice(0, 2)).length !=
                        0 ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full pb-6  ">
                                {sortPostsNewestToOldest(
                                    allPosts.slice(0, 2)
                                ).map((post) => (
                                    <BlogCard
                                        key={post.slug}
                                        title={post.title}
                                        date={post.date}
                                        icon={post.icon}
                                        slug={post.slug}
                                        categories={post.categories}
                                    />
                                ))}
                            </div>
                        ) : (
                            <ItsEmpty />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
