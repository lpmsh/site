import { Post } from "zenblog/dist/types";
import Link from "next/link";

export function BlogCard({ title, published_at, slug }: Post) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group py-1 w-full flex gap-x-2 items-center"
    >
      <div className=" flex justify-between items-center w-full">
        <div className=" flex gap-x-2 items-center group-hover:underline">{title}</div>
        <span className="text-neutral-400">{new Date(published_at).toLocaleDateString() + "\t"}</span>
      </div>
    </Link>
  );
}
