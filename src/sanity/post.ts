import { PortableTextBlock } from "sanity";
import { createClient, groq } from "next-sanity";
import { clientConfig } from "./config/clientConfig";
import { ExcludeField } from "@/types";

export function getPosts(): Promise<PostWithoutContent[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]{
            _id,
            _createdAt,
            title,
            blurb,
            icon,
            "slug": slug.current,
        }`,
    {},
    { cache: "no-store" },
  );
}

export async function getPost(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      blurb,
      icon,
      "slug": slug.current,
      content
    }`,
    { slug },

    { cache: "no-store" },
  );
}

export type PostWithoutContent = ExcludeField<Post, "content">;

export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  blurb: string;
  slug: string;
  content: PortableTextBlock[];
}

export const postSchema = {
  name: "post",
  title: "Posts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "blurb",
      title: "Blurb",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
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
