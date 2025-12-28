import BlogHeader from "@/components/Blog/BlogHeader";
import { Metadata } from "next";
import { zenblog } from "@/lib/zenblog";
import "./blogcontent.css";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { data: post } = await zenblog.posts.get({
    slug: params.slug,
  });

  return {
    title: post.title,
    alternates: {
      canonical: `/blog${post.slug}`,
    },
    description: post.excerpt,
    keywords: post.tags.map((t) => t.name),
  } satisfies Metadata;
}

export default async function BlogSlug({ params }: { params: { slug: string } }) {
  const { data: post } = await zenblog.posts.get({
    slug: params.slug,
  });

  return (
    <>
      <div className="pb-8 prose">
        <h1 className="mb-4 text-center text-2xl">
          <BlogHeader {...post} />
        </h1>
        <div dangerouslySetInnerHTML={{ __html: post.html_content }}></div>
      </div>
    </>
  );
}
