import { Post } from "zenblog/dist/types";
import Link from "next/link";

export function BlogCard({ title, published_at, slug, index }: Post & { index: number }) {
  const date = new Date(published_at);
  const dateStr = date.toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" });

  return (
    <Link
      href={`/blog/${slug}`}
      className="group px-3 py-2 hover:bg-custom-950 transition duration-150 ease-in-out w-full flex gap-x-3 items-center border-b border-custom-950 last:border-b-0"
    >
      <span className="text-custom-700 text-xs tabular-nums w-6 shrink-0">
        {String(index).padStart(2, "0")}
      </span>
      <span className="text-custom-500 shrink-0">{">"}</span>
      <span className="text-neutral-300 group-hover:text-custom-400 transition-colors truncate">
        {title}
      </span>
      <span className="ml-auto text-custom-800 text-xs tabular-nums shrink-0">
        [{dateStr}]
      </span>
    </Link>
  );
}
