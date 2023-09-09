import { PostWithoutContent, Post } from "@/sanity/post";

export function sortPostsNewestToOldest(posts: Array<Post | PostWithoutContent>) {
  return posts.sort(function compareFn(a, b) {
    const aDate = new Date(a._createdAt);
    const bDate = new Date(b._createdAt);
    if (aDate < bDate) {
      return 1;
    }
    if (aDate > bDate) {
      return -1;
    }
    return 0;
  });
}
