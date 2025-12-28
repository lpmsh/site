"use client";;
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Post } from "zenblog/dist/types";

function BlogCard({ title, published_at, slug }: Post) {
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
                <span className="text-neutral-400">{new Date(published_at).toLocaleDateString() + "\t"}</span>
            </div>
        </motion.div>
    );
}

export default BlogCard;
