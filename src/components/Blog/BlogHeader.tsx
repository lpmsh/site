"use client";

import * as React from "react";
import * as ReadingTime from "reading-time";
import A from "../Anchor";
import { SanityImageComponent } from "@/sanity/utils/SanityImageComponent";
import { useRouter } from "next/navigation";

interface BlogHeaderProps {
    title: string;
    icon: string;
    text: string;
}

function BlogHeader({ title, icon, text }: BlogHeaderProps) {
    const readTime = ReadingTime.default(text);
    const { back, push } = useRouter();

    return (
        <div>
            <div className="flex w-full justify-start">
                <button onClick={() => push("/blog")} className="text-neutral-400  hover:text-neutral-500 text-left">
                    &larr;
                </button>
            </div>
            <div>
                <div>
                    <div className="flex flex-col items-center gap-y-4 md:gap-y-0 sm:items-start  md:flex-row md:items-center md:justify-between rounded-xl md:p-6">
                        <SanityImageComponent value={icon} className=" py-0 sm:py-4 md:py-0 lg:py-0 w-[100px] h-[100px] " />
                        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center md:justify-center md:flex-col md:items-end">
                            <div className="text-4xl font-extrabold text-center sm:text-left md:text-right sm:max-w-[75%] md:max-w-[85%]">
                                {title}
                            </div>
                            <div className="font-light text-2xl">{Math.round(readTime.minutes)} min read</div>
                        </div>
                    </div>
                    <div className="w-full bg-white h-px mt-6"></div>
                </div>
            </div>
        </div>
    );
}

export default BlogHeader;
