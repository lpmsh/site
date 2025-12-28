import { zenblog } from "@/lib/zenblog";

async function getBlogSlugs() {
  // TODO paginated requests
  const posts = await zenblog.posts.list();

  return posts.data.map((p) => p.slug);
}

export default async function sitemap() {
  const slugs = await getBlogSlugs();

  const posts = slugs.map((slug) => ({
    url: `https://lpm.sh/blog/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ["", "/photos", "/blog"].map((route) => ({
    url: `https://lpm.sh${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
