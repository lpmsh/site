import * as React from "react";
import { allPosts } from "contentlayer/generated";
import { sortPostsNewestToOldest } from "@/utils/BlogUtils";
import BlogCard from "@/components/Blog/BlogCard";
import { IconGhost } from "@tabler/icons-react";
import ItsEmpty from "@/components/ItsEmpty";

function Blog() {
  return (
      <div className="px-12">
          {/* <div className="text-4xl font-bold pt-4">All Posts</div> */}
          <div className="py-6 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full ">
              {sortPostsNewestToOldest(allPosts).length != 0 ? (
                  sortPostsNewestToOldest(allPosts).map((post) => (
                      <div>
                          <BlogCard
                              title={post.title}
                              date={post.date}
                              icon={post.icon}
                              slug={post.slug}
                              categories={post.categories}
                          />
                      </div>
                  ))
              ) : (
                  <ItsEmpty />
              )}
          </div>
      </div>
  );
}

export default Blog;
