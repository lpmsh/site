import * as ReadingTime from "reading-time";
import { load } from "cheerio";
import { PostWithContent } from "zenblog/dist/types";

function BlogHeader({ title, html_content, published_at }: PostWithContent) {
  const readTime = ReadingTime.default(load(html_content).text());
  const publishedDate = new Date(published_at).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-full flex flex-col gap-2">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">{title}</h1>
      <div className="font-light text-xs text-neutral-500">
        {publishedDate} · {Math.round(readTime.minutes)} min read
      </div>
    </div>
  );
}

export default BlogHeader;
