// app/page.tsx
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { redirect } from "next/navigation";
import Image from "next/image";
import BlogHeader from "@/components/Blog/BlogHeader";
import A from "@/components/Anchor";
import Code from "@/components/code";
import CodeCopy from "@/app/CodeCopy";
import { Metadata } from "next";

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: any): Promise<Metadata | undefined> {
    const post = allPosts.find((post) => post.slug === params.slug);
    if (!post) {
        return;
    }

    const {
        title,
        date: publishedTime,

        icon,
        slug,
    } = post;

    return {
        title,

        openGraph: {
            title,

            type: "article",
            publishedTime,
            url: `https://lpm.sh/blog/${slug}`,
            images: [
                {
                    url: icon,
                },
            ],
        },
    };
}

const mdxComponents: MDXComponents = {
    // Override the default <a> element to use the next/link component.
    // Add a custom component.
    a: ({ href, children }) => (
        <A target="_blank" href={href as string}>
            {children}
        </A>
    ),
    h1: ({ children }) => (
        <h1 className="text-slate-200 text-3xl font-semibold py-2">
            {children}
        </h1>
    ),
    h3: ({ children }) => (
        <h3 className="text-slate-200 text-xl font-semibold py-2">
            {children}
        </h3>
    ),
    p: ({ children }) => <p className="py-2">{children}</p>,
    MyComponent: () => <div>Hello World!</div>,
    // NextImage: ({src, alt, width, height, className}) => <Image src={src} alt={alt} className={className}/>,
    ImageWithCaption: ({ src, alt, caption }) => (
        <div className="py-4">
            <img src={src} alt={alt} className="rounded-md" />
            <div className="text-md font-light pt-1">{caption}</div>
        </div>
    ),
    code: ({ children }) => (
        // <div className="">
        //     <code>{children}</code>
        // </div>
        <div className="relative py-4">
            <div className="w-full bg-neutral-800 p-6 rounded-md break-words whitespace-break-spaces ">
                <code className="">{children}</code>
            </div>

            {/* <button className="absolute top-0 right-0 m-2 p-2 bg-blue-500 text-white rounded">
                Copy {children}
            </button> */}
            <CodeCopy>{children}</CodeCopy>
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
                <BlogHeader
                    title={post.title}
                    icon={post.icon}
                    text={post.body.raw}
                />
            </h1>

            <Component components={mdxComponents} />
        </div>
    );
    return <div></div>;
}
