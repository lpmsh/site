import BlogHeader from "@/components/Blog/BlogHeader";
import { getPost } from "@/sanity/post";
import { PortableTextWrapper } from "@/sanity/utils/PortableTextWrapper";
import { toPlainText } from "@portabletext/react";
// import "./blogcontent.css";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return {
    title: post.title,
    alternates: {
      canonical: `/blog${post.slug}`,
    },
    description: post.blurb,
    keywords: ["expo", "google oauth", "ios", "react native"],
  } satisfies Metadata;
}

export default async function BlogSlug({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  return (
    <>
      <div className="pb-8 prose">
        <h1 className="mb-4 text-center text-2xl">
          <BlogHeader title={post.title} text={toPlainText(post.content)} />
        </h1>
        <PortableTextWrapper content={post.content} />
      </div>
    </>
  );
}
