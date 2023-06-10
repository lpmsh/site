import * as React from "react";
import Image from "next/image";
import * as ReadingTime from "reading-time";
import A from "../Anchor";

interface BlogHeaderProps {
    title: string;
    icon: string;
    text: string;
}

function BlogHeader({ title, icon, text }: BlogHeaderProps) {
    const readTime = ReadingTime.default(text);

    return (
        <div>
            <div className="flex w-full justify-start px-6">
                <A
                    href="/blog"
                    className="text-neutral-400  hover:text-neutral-500 text-left"
                >
                    &larr;
                </A>
            </div>

            <div className="flex flex-col items-center gap-y-4 md:gap-y-0 sm:items-start  md:flex-row md:items-center md:justify-between rounded-xl md:p-6">
                <Image
                    src={icon}
                    alt=""
                    quality={75}
                    width={100}
                    height={100}
                />
                <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center md:justify-center md:flex-col md:items-end">
                    <div className="text-4xl font-extrabold text-center sm:text-left md:text-right sm:max-w-[75%] md:max-w-[85%]">
                        {title}
                    </div>
                    <div className="font-light text-2xl">
                        {Math.round(readTime.minutes)} min read
                    </div>
                </div>
            </div>
            <div className="w-full bg-neutral-700 h-px mt-6"></div>
        </div>
    );
}

export default BlogHeader;
