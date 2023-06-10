// app/page.tsx
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { redirect } from "next/navigation";
import {notFound} from "next/navigation"

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  // Add a custom component.
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  h1: ({ children }) => <h1 className="text-red-500 text-3xl">{children}</h1>,
  MyComponent: () => <div>Hello World!</div>,
};

export default function Post({ params }: { params: any }) {
  const slug = params.slug;

  const post = allPosts.find((post) => post.slug === slug);
  return (<div className="text-white">{JSON.stringify(post)}</div>)
// //   if (!post) return redirect("/blog");
//   const Component = useMDXComponent(post.body.code);

//     return (
//       <div className="mx-auto max-w-xl py-8">
//         <h1 className="mb-8 text-center text-2xl text-white">
//           {post.slug} vs {slug}
//         </h1>
//         {/* {posts.map((post, idx) => (
//           <PostCard key={idx} {...post} />
//         ))} */}
//         <Component components={mdxComponents} />
//       </div>
//     );
//   return <div></div>;
}
