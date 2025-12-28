"use client";;
import * as ReadingTime from "reading-time";
import { load } from "cheerio";
import { PostWithContent } from "zenblog/dist/types";

function BlogHeader({ title, html_content }: PostWithContent) {
  const readTime = ReadingTime.default(load(html_content).text());

  return (
    <div className="w-full flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
      <div className="text-2xl font-extrabold text-center sm:text-left md:text-right sm:max-w-[75%] md:max-w-[85%]">{title}</div>
      <div className="font-light text-lg">{Math.round(readTime.minutes)} min read</div>
    </div>
  );
}

export default BlogHeader;
