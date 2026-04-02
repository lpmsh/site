# On-Demand Revalidation Route Plan

When you're ready to implement instant cache invalidation (instead of waiting up to 1 hour), add this API route.

## Create `src/app/api/revalidate/route.ts`

```ts
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATION_SECRET) {
    return Response.json({ message: "Invalid secret" }, { status: 401 });
  }

  // Invalidates the blog listing and all individual post pages
  revalidatePath("/blog", "layout");

  return Response.json({ revalidated: true });
}
```

## Environment Variable

Add `REVALIDATION_SECRET` to your `.env` and Vercel environment variables — any random string works.

## Usage

Call the endpoint to instantly invalidate all blog caches:

```
GET https://lpm.sh/api/revalidate?secret=YOUR_SECRET
```

## Zenblog Webhook (Optional)

If Zenblog supports webhooks, point it at this URL so publishing a post automatically invalidates the cache. Otherwise, you can hit it manually or via a bookmark/shortcut after publishing.

## How It Works

- `revalidatePath("/blog", "layout")` marks the blog listing and all `[slug]` pages as stale
- The next visitor triggers background regeneration (sees the old page), and the visitor after that sees fresh content
- The 1-hour `revalidate` safety net still applies as a fallback
