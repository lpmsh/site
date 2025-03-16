import { PortableTextBlock } from "sanity";
import { createClient, groq } from "next-sanity";
import { clientConfig } from "./config/clientConfig";
import { ExcludeField } from "@/types";

export function getWorkPosts(): Promise<WorkPost[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "workPost"]{
            _id,
            _createdAt,
            title,
            order,
            category,
            "slug": slug.current,
            content,
            link,
            images[]{
              ...,
            }
        }`,
    {},
    { cache: "no-store" },
  );
}
export function getWorkPostsWithoutContent(): Promise<WorkPostWithoutContent[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "workPost"]{
            _id,
            _createdAt,
            title,
            order,
            category,
            link,
            "slug": slug.current,
            images[]{
              ...,
            }
        }`,
    {},
    { cache: "no-store" },
  );
}

export async function getWorkPost(slug: string): Promise<WorkPost> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "workPost" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      order,
      "slug": slug.current,
      category,
      content,
      link,
      images[]{
        ...,
      }
    }`,
    { slug },
    { cache: "no-store" },
  );
}
export type WorkPostWithoutContent = ExcludeField<WorkPost, "content">;

export interface WorkPost {
  _id: string;
  _createdAt: string;
  title: string;
  blurb: string;
  images: WorkPostImage[];
  slug: string;
  content: PortableTextBlock[];
  order: number;
  link: string
}

export interface WorkPostImage {
  image: string;
  alt: string;
}

export const workPostImageSchema = {
  name: "workPostImage",
  title: "Work Post Image",
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

export const workPostSchema = {
  name: "workPost",
  title: "Work Posts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: "blurb",
      title: "Blurb",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    { name: "images", title: "Images", type: "array", of: [{ type: "workPostImage" }] },

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
        {
          type: "code",
          name: "code",
          title: "Code Block",
          withFilename: true,
        },
      ],
    },
  ],
};
