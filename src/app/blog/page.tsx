import * as React from "react";
import { allPosts } from "contentlayer/generated";

function Blog() {
  return (
    <div className="">
      {allPosts.length > 0 ? allPosts.map((post) => (
        <h1>{post.title}</h1>
      )) : <div>NO POSTS TO SHOW</div>}
      
    </div>
  );
}

export default Blog;
