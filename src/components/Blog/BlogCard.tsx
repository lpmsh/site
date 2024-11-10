"use client";

import * as React from "react";
import { getHumanDateFromSlashDate } from "@/utils/DateUtils";
import { PostWithoutContent } from "@/sanity/post";
import { SanityImageComponent } from "@/sanity/utils/SanityImageComponent";
import Card from "../Card";
import { useRouter } from "next/navigation";
import { getPostDate } from "@/sanity/utils/date";
import { motion } from "framer-motion";

function BlogCard({ title, _createdAt, slug }: PostWithoutContent) {
    const { push } = useRouter();
    return (
        <motion.div
            onClick={() => push(`/blog/${slug}`)}
            initial={{
                padding: 0,
            }}
            whileHover={{
                paddingLeft: 2,
                paddingRight: 2
            }}
            className=" py-1 hover:bg-black hover:bg-opacity-[0.05] hover:cursor-pointer transition duration-300 ease-in-out w-full flex gap-x-2 items-center"
        >
            <div className=" flex justify-between items-center w-full">
                <div className=" flex gap-x-2 items-center">{title}</div>
                <span className="text-neutral-400">{getPostDate(_createdAt).toLocaleDateString() + "\t"}</span>
            </div>
        </motion.div>
    );
}

export default BlogCard;
