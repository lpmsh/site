import * as ReadingTime from "reading-time";
import { load } from "cheerio";
import { PostWithContent } from "zenblog/dist/types";

function BlogHeader({ title, html_content }: PostWithContent) {
  const readTime = ReadingTime.default(load(html_content).text());

  return (
    <div className="w-full font-mono">
      <div className="text-custom-400 text-xs mb-4 whitespace-pre">
{`┌─── POST ───────────────────────────┐`}
      </div>
      <div className="text-2xl font-bold text-left text-neutral-100">
        {">"} {title}
      </div>
      <div className="flex gap-x-4 mt-2 text-xs text-custom-700">
        <span>[ {Math.round(readTime.minutes)} min read ]</span>
        <span>[ {readTime.words} words ]</span>
      </div>
      <div className="text-custom-400 text-xs mt-4 whitespace-pre">
{`└────────────────────────────────────┘`}
      </div>
    </div>
  );
}

export default BlogHeader;
