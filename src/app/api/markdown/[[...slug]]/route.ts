import TurndownService from "turndown";
import { zenblog } from "@/lib/zenblog";

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});

const MARKDOWN_HEADERS = {
  "Content-Type": "text/markdown; charset=utf-8",
  Vary: "Accept",
  "Cache-Control": "s-maxage=60, stale-while-revalidate=86400",
};

async function renderBlogIndex(): Promise<string> {
  const posts = await zenblog.posts.list({ limit: 100 });
  const sorted = posts.data.sort(
    (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
  );
  const lines = ["# Blog", ""];
  for (const post of sorted) {
    const date = new Date(post.published_at).toISOString().split("T")[0];
    lines.push(`- [${post.title}](/blog/${post.slug}) — ${date}`);
  }
  return lines.join("\n") + "\n";
}

async function renderBlogPost(slug: string): Promise<string | null> {
  try {
    const { data: post } = await zenblog.posts.get({ slug });
    const body = turndown.turndown(post.html_content ?? "");
    const date = new Date(post.published_at).toISOString().split("T")[0];
    return `# ${post.title}\n\n_${date}_\n\n${body}\n`;
  } catch {
    return null;
  }
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug?: string[] }> },
) {
  const { slug = [] } = await params;

  if (slug.length === 0 || (slug.length === 1 && slug[0] === "")) {
    return new Response("# Liam Monaghan\n\nSee [/blog](/blog) for writing.\n", {
      headers: MARKDOWN_HEADERS,
    });
  }

  if (slug[0] === "blog") {
    if (slug.length === 1) {
      const body = await renderBlogIndex();
      return new Response(body, { headers: MARKDOWN_HEADERS });
    }
    if (slug.length === 2) {
      const body = await renderBlogPost(slug[1]);
      if (body === null) return new Response("Not found", { status: 404 });
      return new Response(body, { headers: MARKDOWN_HEADERS });
    }
  }

  return new Response("Not found", { status: 404 });
}
