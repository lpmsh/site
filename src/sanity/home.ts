import { groq } from "next-sanity";
import { clientConfig } from "./config/clientConfig";
import { createClient } from "next-sanity";
import { defineField, defineType } from "sanity";

export async function getHome(): Promise<Home> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "home"][0]{
      slogan,
      bannerTitle,
      bannerLink,
      chipTitle,
      chipLink
    }`,
        {},

        { cache: "no-store" }
    );
}

export interface Home {
    _id: string;
    _createdAt: Date;
    slogan: string;
    bannerTitle: string;
    bannerLink: string;
    chipTitle: string;
    chipLink: string;
}



export const homeSchema = {
    name: "home",
    title: "Home Page",
    type: "document",
    fields: [
        {
            name: "slogan",
            title: "Home Page Slogan",
            type: "string",
        },
        {
            name: "bannerTitle",
            title: "Banner Title",
            type: "string",
            description: "The title which you want the top of page banner to have. (This banner is at the very top of the page)",
        },
        {
            name: "bannerLink",
            title: "Banner Link",
            type: "url",
            description: "The URL which you want the top of page banner to link to. (This banner is at the very top of the page)",
        },
        {
            name: "chipTitle",
            title: "Chip Title",
            type: "string",
            description: "The title which you want the chip right above the slogan to have.",
        },
        {
            name: "chipLink",
            title: "Chip Link",
            type: "url",
            description: "The URL which you want the chip right above the slogan to link to.",
        },
    ],
};
