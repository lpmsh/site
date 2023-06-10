import { Post } from "contentlayer/generated";

export function sortPostsNewestToOldest(posts: Post[]) {
  return posts.sort(function compareFn(a, b) {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    if (aDate < bDate) {
      return 1;
    }
    if (aDate > bDate) {
      return -1;
    }
    return 0;
  });
}
