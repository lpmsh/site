import * as React from "react";
import { allPosts } from "contentlayer/generated";
import { sortPostsNewestToOldest } from "@/utils/BlogUtils";
import BlogCard from "@/components/Blog/BlogCard";

function Blog() {
  return (
    <div className="py-6 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full px-12">
      {sortPostsNewestToOldest(allPosts).map((post) => (
        <div>
          <BlogCard
            title={post.title}
            date={post.date}
            icon={post.icon}
            slug={post.slug}
            categories={post.categories}
          />
        </div>
      ))}
    </div>
  );
}

export default Blog;
