import { PortableTextBlock } from "sanity";
import { createClient, groq } from "next-sanity";
import { clientConfig } from "./config/clientConfig";
import { ExcludeField } from "@/utils/ExcludeField";

export function getGearPosts(): Promise<GearPost[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "gearPost"]{
            _id,
            _createdAt,
            title,
            category,
            "slug": slug.current,
            content,
            images[]{
              ...,
            }
        }`,
        {},
        { cache: "no-store" }
    );
}
export function getGearPostsWithoutContent(): Promise<GearPostWithoutContent[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "gearPost"]{
            _id,
            _createdAt,
            title,
            category,
            "slug": slug.current,
            images[]{
              ...,
            }
        }`,
        {},
        { cache: "no-store" }
    );
}

export async function getGearPost(slug: string): Promise<GearPost> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "gearPost" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      category,
      content,
      images[]{
        ...,
      }
    }`,
        { slug },
        { cache: "no-store" }
    );
}

type SortedGearPostsObj = {
    [category in GearPostCategory]?: GearPostWithoutContent[];
};
export function sortGearPostsByCategory(posts: GearPostWithoutContent[]): SortedGearPostsObj {
    let sortedPostsObj: { [key: string]: GearPostWithoutContent[] } = {};

    posts.forEach((page) => {
        const previousCategoryArrayExists = Object.keys(sortedPostsObj).includes(page.category);
        if (!previousCategoryArrayExists) {
            sortedPostsObj[page.category as string] = [page];
        } else if (previousCategoryArrayExists) {
            sortedPostsObj[page.category as string].push(page);
        }
    });

    return sortedPostsObj as SortedGearPostsObj;
}

export interface GearPost {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    category: GearPostCategory;
    content: PortableTextBlock[];
    images: GearPostImage[]
}

export type GearPostWithoutContent = ExcludeField<GearPost, "content">;

const gearPostCategories = ["Photography", "Desk Setup", "Making", "Other"] as const;

export type GearPostCategory = (typeof gearPostCategories)[number];

export interface GearPostImage {
  image: string,
  alt: string
}

export const gearPostImageSchema = {
    name: "gearPostImage",
    title: "Gear Post Image",
    type: "document",
    fields: [
        {
            title: "Image",
            name: "image",
            type: "image",
            options: {
                hotspot: true, // <-- Defaults to false
            },
        },
        {
            name: "alt",
            title: "Alt",
            type: "string",
        },
    ],
};

export const gearPostSchema = {
    name: "gearPost",
    title: "Gear Posts",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
        },
        {
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: gearPostCategories,
                layout: "dropdown",
            },
        },
        {name: "images", title: "Images", type: "array", of: [{type: "gearPostImage"}]},
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                { type: "block" },
                {
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: "caption",
                            type: "string",
                            title: "Image caption",
                            description: "Caption displayed below the image.",
                        },
                        {
                            name: "alt",
                            type: "string",
                            title: "Alternative text",
                            description: "Important for SEO and accessiblity.",
                        },
                    ],
                },
            ],
        },
    ],
};
