// app/page.tsx
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { redirect } from "next/navigation";
import Image from "next/image";
import BlogHeader from "@/components/Blog/BlogHeader";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  // Add a custom component.
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  h1: ({ children }) => (
    <h1 className="text-slate-200 text-3xl font-semibold py-2">{children}</h1>
  ),
  p: ({ children }) => <p className="py-2">{children}</p>,
  MyComponent: () => <div>Hello World!</div>,
  // NextImage: ({src, alt, width, height, className}) => <Image src={src} alt={alt} className={className}/>,
  ImageWithCaption: ({ src, alt, caption }) => (
    <div className="py-4">
      <img src={src} alt={alt} className="py-4" />
      <div className="text-md font-light">{caption}</div>
    </div>
  ),
};

export default function Post({ params }: { params: any }) {
  const slug = params.slug;

  const post = allPosts.find((post) => post.slug === slug);
  // return (<div className="text-white">{JSON.stringify(post)}</div>)
  if (!post) return redirect("/blog");
  const Component = useMDXComponent(post.body.code);

  return (
    <div className="mx-auto max-w-3xl py-8 px-6">
      <h1 className="mb-8 text-center text-2xl text-white">
        <BlogHeader title={post.title} icon={post.icon} text={post.body.raw} />
      </h1>

      <Component components={mdxComponents} />
    </div>
  );
  return <div></div>;
}
