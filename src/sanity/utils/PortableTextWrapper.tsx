"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";

import { PortableTextBlock } from "sanity";

import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { clientConfig } from "@/sanity/config/clientConfig";
import CodeText from "@/components/CodeText";
import CodeCopy from "@/components/CodeCopy";

// // Barebones lazy-loaded image component
const BlockContentImageComponent = ({ value, isInline }: { value: any; isInline?: any }) => {
    const { width, height } = getImageDimensions(value);
    return (
        <div className="mb-8">
            <div className="">
                <img
                    src={urlBuilder(clientConfig)
                        .image(value)
                        .width(isInline ? 100 : 800)
                        .fit("max")
                        .auto("format")
                        .url()}
                    alt={value.alt || " "}
                    loading="lazy"
                    style={{
                        // Display alongside text if image appears inside a block text span
                        display: isInline ? "inline-block" : "block",

                        // Avoid jumping around with aspect-ratio CSS property
                        aspectRatio: width / height,
                    }}
                />
                <div className="text-base text-neutral-500">{value.caption}</div>
            </div>
        </div>
    );
};

const portableTextComponents: PortableTextComponents = {
    types: {
        image: BlockContentImageComponent,
        code: ({ value }) => (
            <div className="relative py-4">
                <div className="w-full bg-neutral-800 p-6 rounded-md break-words whitespace-break-spaces ">
                    <CodeText code={value.code} />
                </div>

                {/* <button className="absolute top-0 right-0 m-2 p-2 bg-blue-500 text-white rounded">
                Copy {children}
            </button> */}
                <CodeCopy text={value.code}/>
            </div>
        ),
    },
    marks: {
        link: ({ value, children }) => {
            const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
            return (
                <a className="underline text-primary-500 hover:text-primary-400" href={value?.href} target={target}>
                    {children}
                </a>
            );
        },
    },
};

export function PortableTextWrapper({ content }: { content: PortableTextBlock[] }) {
    return <PortableText value={content} components={portableTextComponents} />;
}
