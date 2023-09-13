import * as React from "react";
import { getHumanDateFromSlashDate } from "@/utils/DateUtils";
import { PostWithoutContent } from "@/sanity/post";
import { SanityImageComponent } from "@/sanity/utils/SanityImageComponent";
import Card from "../Card";

function BlogCard({ title, _createdAt, icon, slug }: PostWithoutContent) {
    return (
        <a href={`/blog/${slug}`}>
            <Card className="px-8 py-6 text-left w-full">
                <div className="flex flex-col gap-y-2  justify-between items-center">
                    <SanityImageComponent value={icon} className="w-[64px] h-[64px]" />
                    <div className="flex flex-col ">
                        <div className="text-xl font-bold w-full h-16 flex items-center text-center text-white ">{title}</div>
                        <div className="font-light text-md  text-center">{getHumanDateFromSlashDate(_createdAt)}</div>
                    </div>
                </div>
            </Card>
        </a>
    );
}

export default BlogCard;
