// Generates src/app/(pages)/photos/photos.json from the Vercel Blob store.
//
// For each image in the store it records the public URL, oriented dimensions,
// and a tiny base64 blur placeholder (so next/image can show a blur-up while
// the full image loads).
//
// Usage:
//   npm run photos:sync
//
// Requires BLOB_READ_WRITE_TOKEN. The script auto-loads it from .env.local,
// or you can pass it inline: BLOB_READ_WRITE_TOKEN=... npm run photos:sync
//
// Feed order follows filenames (natural sort). Prefix names to control order,
// e.g. 001-rooftop.jpg, 002-subway.jpg.

import { list } from "@vercel/blob";
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const IMAGE_RE = /\.(jpe?g|png|webp|avif|gif)$/i;

const OUT = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "src",
  "app",
  "(pages)",
  "photos",
  "photos.json",
);

async function loadEnvLocal() {
  try {
    const txt = await readFile(".env.local", "utf8");
    for (const line of txt.split("\n")) {
      const m = line.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/);
      if (!m || process.env[m[1]]) continue;
      let v = m[2].trim();
      if (
        (v.startsWith('"') && v.endsWith('"')) ||
        (v.startsWith("'") && v.endsWith("'"))
      ) {
        v = v.slice(1, -1);
      }
      process.env[m[1]] = v;
    }
  } catch {
    // no .env.local — rely on the ambient environment
  }
}

async function main() {
  await loadEnvLocal();
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    console.error(
      "Missing BLOB_READ_WRITE_TOKEN. Add it to .env.local or pass it inline.",
    );
    process.exit(1);
  }

  // Page through the store so galleries larger than one page are covered.
  const blobs = [];
  let cursor;
  do {
    const res = await list({ token, cursor, limit: 1000 });
    blobs.push(...res.blobs);
    cursor = res.cursor;
  } while (cursor);

  const images = blobs
    .filter((b) => IMAGE_RE.test(b.pathname))
    .sort((a, b) =>
      a.pathname.localeCompare(b.pathname, undefined, { numeric: true }),
    );

  console.log(`Found ${images.length} image(s). Processing…`);

  const photos = [];
  for (const blob of images) {
    const buf = Buffer.from(await (await fetch(blob.url)).arrayBuffer());
    const img = sharp(buf);
    const meta = await img.metadata();

    // EXIF orientation 5-8 means width/height are stored swapped relative to
    // how the image is displayed (and how next/image will serve it).
    const swapped = (meta.orientation ?? 1) >= 5;
    const width = swapped ? meta.height : meta.width;
    const height = swapped ? meta.width : meta.height;

    const blurBuf = await img
      .rotate() // bake EXIF orientation into the placeholder
      .resize(20, null, { fit: "inside" })
      .blur()
      .jpeg({ quality: 40 })
      .toBuffer();

    photos.push({
      url: blob.url,
      width,
      height,
      blurDataURL: `data:image/jpeg;base64,${blurBuf.toString("base64")}`,
      alt: "",
    });

    console.log(`  ✓ ${blob.pathname} (${width}×${height})`);
  }

  await writeFile(OUT, JSON.stringify(photos, null, 2) + "\n");
  console.log(`Wrote ${photos.length} photo(s) → ${path.relative(process.cwd(), OUT)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
