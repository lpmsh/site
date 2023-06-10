export interface ContentCategory {
  name: string;
  abbreviation: CategoryAbbreviation;
  slug: string;
  emoji: string;
}

export type CategoryAbbreviation = "WebDev" | "Entertainment" | "Sports";

export const contentCategories: ContentCategory[] = [
  {
    name: "Web Development",
    abbreviation: "WebDev",
    slug: "web-developement",
    emoji: "👨‍💻",
  },
  {
    name: "Entertainment",
    abbreviation: "Entertainment",
    slug: "entertainment",
    emoji: "🎬",
  },
  {
    name: "Sports",
    abbreviation: "Sports",
    slug: "sports",
    emoji: "🏈",
  },
];

export const frontMatterCategoryTemplateArray: CategoryAbbreviation[] = [
  "WebDev",
  "Sports",
  "Entertainment",
];
