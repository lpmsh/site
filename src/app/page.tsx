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
import Bento from "@/components/Bento/Bento";
import Image from "next/image";
import pfp from "./pfp.png";


function Home() {
    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center bg-background pb-12">
            <div className="container mx-auto min-h-screen">
                <div className="flex justify-center items-start ">
                    <div className="  w-full max-w-[1000px] flex flex-col  items-start gap-y-8 px-10">
                        <Nav />
                        {/* <div className="px-10"> */}
                            {/* <div className="flex w-full items-center">
                                <Image
                                    src={pfp}
                                    alt="avatar"
                                    quality={100}
                                    className="rounded-full w-[120px] h-[120px]"
                                />
                                <div className="rounded-full bg-neutral-700 flex gap-x-2 p-4">
                                    <IconBrandGithub/>
                                    <IconBrandInstagram/>
                                    <IconBrandTwitter/>
                                </div>
                            </div> */}
                            <div className="text-xl font-normal self-center text-left justify-self-center">
                                Hey!
                                <span className="font-bold">
                                    {" "}
                                    I&apos;m Liam.
                                </span>{" "}
                                I&apos;m a Christian, student, developer,{" "}
                                <A href="/photos">photographer</A>, Pittsburgh
                                and Ohio State sports fan, and can't live
                                without music. You can usually find me coding,
                                with my{" "}
                                <A href="https://frc8592.org">
                                    awesome robotics team
                                </A>
                                , <A href="/blog">writing about something</A>,
                                or hanging out with friends.
                            </div>
                        {/* </div> */}
                        <Bento />
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
