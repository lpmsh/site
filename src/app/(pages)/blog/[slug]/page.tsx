import BlogHeader from "@/components/Blog/BlogHeader";
import { Metadata } from "next";
import { zenblog } from "@/lib/zenblog";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await zenblog.posts.list({ limit: 100 });
  return posts.data.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: post } = await zenblog.posts.get({
    slug,
  });

  const images = post.cover_image ? [post.cover_image] : undefined;

  return {
    title: post.title,
    alternates: {
      canonical: `/blog${post.slug}`,
    },
    description: post.excerpt,
    keywords: post.tags.map((t) => t.name),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images,
    },
  } satisfies Metadata;
}

export default async function BlogSlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: post } = await zenblog.posts.get({
    slug,
  });

  return (
    <>
      <div className="pb-8 prose prose-sm prose-neutral max-w-none w-full mx-auto">
        <div className="mb-4 not-prose">
          <BlogHeader {...post} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html_content }} className="content"></div>
      </div>
    </>
  );
}
