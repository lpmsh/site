import * as ReadingTime from "reading-time";
import { load } from "cheerio";
import { PostWithContent } from "zenblog/dist/types";

function BlogHeader({ title, html_content }: PostWithContent) {
  const readTime = ReadingTime.default(load(html_content).text());

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="text-2xl font-extrabold">{title}</div>
      <div className="font-light text-lg">{Math.round(readTime.minutes)} min read</div>
    </div>
  );
}

export default BlogHeader;
