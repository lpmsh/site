"use client";

import * as React from "react";
import * as ReadingTime from "reading-time";
import A from "../Anchor";
import { SanityImageComponent } from "@/sanity/utils/SanityImageComponent";
import { useRouter } from "next/navigation";

interface BlogHeaderProps {
  title: string;
  text: string;
}

function BlogHeader({ title, text }: BlogHeaderProps) {
  const readTime = ReadingTime.default(text);

  return (
    <div className="w-full flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
      <div className="text-2xl font-extrabold text-center sm:text-left md:text-right sm:max-w-[75%] md:max-w-[85%]">{title}</div>
      <div className="font-light text-lg">{Math.round(readTime.minutes)} min read</div>
    </div>
  );
}

export default BlogHeader;
