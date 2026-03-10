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
      <div className="pb-8 prose prose-neutral font-mono retro-scanlines">
        <div className="mb-6">
          <BlogHeader {...post} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html_content }} className="content retro-prose"></div>
        <div className="text-custom-900 text-xs mt-8 font-mono not-prose">
          {">"} EOF_<span className="retro-blink">▌</span>
        </div>
      </div>
    </>
  );
}
