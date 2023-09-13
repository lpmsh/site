import * as React from "react";
import A from "@/components/Anchor";
import BlogCard from "@/components/Blog/BlogCard";
import { sortPostsNewestToOldest } from "@/utils/BlogUtils";
import { Header } from "@/components/Nav/Header";
import ItsEmpty from "@/components/ItsEmpty";
import Bento from "@/components/Bento/Bento";
import Image from "next/image";
import pfp from "./pfp.png";
import SocialLinks from "@/components/Nav/SocialLinks";
import AnimateHeight from "react-animate-height";
import { NavDrawer } from "@/components/Nav/NavDrawer";
import { getPosts } from "@/sanity/post";

export default async function Home() {
    const posts = await getPosts();

    return (
        <>
            <NavDrawer homePage />
            <div className="min-h-screen bg-cover bg-center flex items-center justify-center bg-background pb-12">
                <div className="container mx-auto min-h-screen">
                    <div className="flex justify-center items-start ">
                        <div className="  w-full max-w-[1000px] flex flex-col  items-start gap-y-8 px-4 sm:px-10">
                            <Header />
                            {/* <div className="px-10"> */}

                            <div className="flex w-full items-center justify-between">
                                <Image src={pfp} alt="avatar" quality={100} className="rounded-full w-[120px] h-[120px]" />
                                <div className="text-5xl lg:text-6xl font-bold text-white md:inline hidden ">Hi, I'm Liam 👋</div>
                                <SocialLinks />
                            </div>
                            <div className="text-4xl md:text-6xl font-bold text-white md:hidden inline text-center px-2 ">Hi, I'm Liam 👋</div>
                            <div className="flex w-full justify-center px-2">
                                <div className="text-xl font-normal self-center text-left">
                                    I&apos;m a Christian, student, developer, <A href="/photos">photographer</A>, Pittsburgh and Ohio State sports
                                    fan, and can't live without music. You can usually find me coding, with my{" "}
                                    <A href="https://frc8592.org">robotics team</A>, <A href="/blog">writing about something</A>, or hanging
                                    out with friends.
                                </div>
                            </div>

                            {/* </div> */}
                            <Bento />
                            {/* <div className="pt-6 text-2xl font-semibold">Recent Blog Posts</div>

                            {sortPostsNewestToOldest(posts.slice(0, 2)).length != 0 ? (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full pb-6  ">
                                    {sortPostsNewestToOldest(posts.slice(0, 2)).map((post) => (
                                        <BlogCard {...post} />
                                    ))}
                                </div>
                            ) : (
                                <ItsEmpty />
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
