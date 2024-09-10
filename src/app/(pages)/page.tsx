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
import { getPosts } from "@/sanity/post";

export default async function Home() {
    const posts = await getPosts();

    return (
        <div className="bg-cover bg-center flex items-center justify-center bg-background min-h-dvh">
            <div className="flex justify-center items-start ">
                <div className="  w-full flex flex-col  items-start gap-y-8">
                    <div className="text-5xl lg:text-6xl font-bold text-white ">Hi, I'm Liam 👋</div>
                    <div className="flex w-full justify-center px-2">
                        <div className="text-xl font-normal self-center text-left">
                            I&apos;m a Christian, student, developer, <A href="/photos">photographer</A>, Pittsburgh and Ohio State sports fan, and
                            can't live without music. You can usually find me{" "}
                            <A href="https://github.com/slyguy5646" target="_blank">
                                coding
                            </A>{" "}
                            or hanging out with friends.{" "}
                            <a className=" w-full text-center" target="_blank" href="https://light.lpm.sh">
                                💡
                            </a>
                        </div>
                    </div>

                    <Bento />
                </div>
            </div>
        </div>
    );
}
