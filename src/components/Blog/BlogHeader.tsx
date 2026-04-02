import * as ReadingTime from "reading-time";
import { load } from "cheerio";
import { PostWithContent } from "zenblog/dist/types";

function BlogHeader({ title, html_content }: PostWithContent) {
  const readTime = ReadingTime.default(load(html_content).text());

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="text-lg font-semibold">{title}</div>
      <div className="font-light text-xs text-neutral-500">{Math.round(readTime.minutes)} min read</div>
    </div>
  );
}

export default BlogHeader;
