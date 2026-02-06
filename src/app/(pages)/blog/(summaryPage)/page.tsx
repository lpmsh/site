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
    <div className="flex w-full justify-center">
      <div className="flex flex-col items-center w-full">
        <div className="text-4xl font-bold text-left w-full">Blog</div>
        <div className=" py-6  flex flex-col gap-y-4 w-full ">
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
                .map((post) => (
                  <BlogCard key={post.title} {...post} />
                ))}
            </>
          ) : (
            <ItsEmpty />
          )}
        </div>
      </div>
    </div>
  );
}
