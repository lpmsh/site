import BlogHeader from "@/components/Blog/BlogHeader";
import { getPost } from "@/sanity/post";
import { PortableTextWrapper } from "@/sanity/utils/PortableTextWrapper";
import { toPlainText } from "@portabletext/react";

export default async function TestSlug({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);
    return (
        <>
            <div className="mx-auto max-w-3xl py-8 px-6">
                <h1 className="mb-8 text-center text-2xl text-white">
                    <BlogHeader title={post.title} icon={post.icon} text={toPlainText(post.content)} />
                </h1>
                <PortableTextWrapper content={post.content} /> 
                {/* {JSON.stringify(post.content)} */}
            </div>
        </>
    );
}
