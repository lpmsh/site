import BlogHeader from "@/components/Blog/BlogHeader";
import { Metadata } from "next";
import { zenblog } from "@/lib/zenblog";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: post } = await zenblog.posts.get({
    slug,
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

export default async function BlogSlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: post } = await zenblog.posts.get({
    slug,
  });

  return (
    <>
      <div className="pb-8 prose prose-neutral max-w-none w-full mx-auto">
        <h1 className="mb-4 text-center text-2xl">
          <BlogHeader {...post} />
        </h1>
        <div dangerouslySetInnerHTML={{ __html: post.html_content }} className="content"></div>
      </div>
    </>
  );
}
