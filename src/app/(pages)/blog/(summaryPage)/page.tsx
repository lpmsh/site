import { BlogCard } from "@/components/Blog/BlogCard";
import { zenblog } from "@/lib/zenblog";
import ItsEmpty from "@/components/ItsEmpty";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/blog",
  },
  title: "Blog",
  description: "Liam Monaghan's Blog",
};

export default async function Blog() {
  // TODO add paginated query
  const posts = await zenblog.posts.list({
    "limit": 100
  });

  return (
    <div className="flex w-full justify-center font-mono">
      <div className="flex flex-col items-center w-full">
        <div className="w-full text-custom-400 text-sm whitespace-pre">
{`
 ┌──────────────────────────────────┐
 │  > BLOG_                         │
 │  Loading entries...              │
 └──────────────────────────────────┘`}
        </div>
        <div className="py-4 flex flex-col w-full border border-custom-900 retro-scanlines">
          <div className="px-3 py-1 text-xs text-custom-500 border-b border-custom-900 flex justify-between">
            <span>{"// entries"}</span>
            <span>{posts.data.length} records found</span>
          </div>
          {posts.data.length != 0 ? (
            <>
              {posts.data
                .sort((a, b) => {
                  const aDate = new Date(a.published_at);
                  const bDate = new Date(b.published_at);

                  if (aDate < bDate) {
                    return 1;
                  } else if (aDate > bDate) {
                    return -1;
                  }
                  return 0;
                })
                .map((post, i) => (
                  <BlogCard key={post.title} {...post} index={i} />
                ))}
            </>
          ) : (
            <ItsEmpty />
          )}
        </div>
        <div className="w-full text-custom-900 text-xs mt-2 font-mono">
          {">"} end of transmission_<span className="retro-blink">▌</span>
        </div>
      </div>
    </div>
  );
}
