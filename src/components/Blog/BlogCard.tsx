import * as React from "react";
import { getHumanDateFromSlashDate } from "@/utils/DateUtils";
import { PostWithoutContent } from "@/sanity/post";
import { SanityImageComponent } from "@/sanity/utils/SanityImageComponent";

function BlogCard({ title, _createdAt, icon, slug }: PostWithoutContent) {
    return (
        <a href={`/blog/${slug}`}>
            <div className=" hover:border-neutral-600 border-neutral-800 border-2 rounded-xl bg-neutral-800 px-8 py-6 text-left w-full">
                <div className="flex flex-col gap-y-2  justify-between items-center">
                    <SanityImageComponent value={icon} className="w-[64px] h-[64px]" />
                    <div className="flex flex-col ">
                        <div className="text-xl font-bold w-full h-16 flex items-center text-center text-white ">{title}</div>
                        <div className="font-light text-md  text-center">{getHumanDateFromSlashDate(_createdAt)}</div>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default BlogCard;
