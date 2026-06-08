"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export type Photo = {
  url: string;
  width: number;
  height: number;
  blurDataURL: string;
  alt?: string;
};

// Must match next.config.js `images.deviceSizes`.
const DEVICE_SIZES = [640, 750, 828, 1080, 1200, 1920];

// Reconstruct the optimized URL the lightbox will request for the current
// viewport, so hovering a tile warms the exact same cache entry the click
// will hit. Mirrors the lightbox <Image> `sizes` below.
function lightboxSrc(url: string) {
  const vw =
    window.innerWidth >= 1024 ? 0.5 : window.innerWidth >= 640 ? 0.8 : 1;
  const required = Math.ceil(
    window.innerWidth * vw * (window.devicePixelRatio || 1),
  );
  const width =
    DEVICE_SIZES.find((w) => w >= required) ??
    DEVICE_SIZES[DEVICE_SIZES.length - 1];
  return `/_next/image?url=${encodeURIComponent(url)}&w=${width}&q=75`;
}

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<Photo | null>(null);
  const [loaded, setLoaded] = useState(false);
  const preloaded = useRef<Set<string>>(new Set());

  const close = useCallback(() => setActive(null), []);

  // Warm the full-size image on intent (hover / press) so opening is instant.
  const preload = useCallback((photo: Photo) => {
    if (preloaded.current.has(photo.url)) return;
    preloaded.current.add(photo.url);
    const img = new window.Image();
    img.src = lightboxSrc(photo.url);
  }, []);

  // Reset the load state each time a new photo opens.
  useEffect(() => {
    setLoaded(false);
  }, [active]);

  // Close on Escape and lock body scroll while the lightbox is open.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  if (photos.length === 0) {
    return (
      <p className="text-neutral-500 p-8">
        No photos yet — upload them to Vercel Blob and run{" "}
        <code>npm run photos:sync</code>.
      </p>
    );
  }

  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {photos.map((photo, index) => (
          <button
            key={photo.url}
            type="button"
            onClick={() => setActive(photo)}
            onPointerEnter={() => preload(photo)}
            onPointerDown={() => preload(photo)}
            aria-label="Open photo"
            className="relative block w-full aspect-[4/5] cursor-zoom-in"
          >
            <Image
              src={photo.url}
              fill
              placeholder="blur"
              blurDataURL={photo.blurDataURL}
              alt={photo.alt ?? ""}
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
              // First row is above the fold — load it eagerly for a fast LCP;
              // everything else stays lazy.
              priority={index < 3}
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          onClick={close}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out bg-black/60 backdrop-blur-md"
        >
          {!loaded && (
            <div
              aria-hidden
              className="absolute h-8 w-8 animate-spin rounded-full border-2 border-neutral-600 border-t-neutral-200"
            />
          )}
          <Image
            src={active.url}
            width={active.width}
            height={active.height}
            alt={active.alt ?? ""}
            sizes="(min-width: 1024px) 50vw, (min-width: 640px) 80vw, 100vw"
            priority
            onLoad={() => setLoaded(true)}
            className={`max-h-full max-w-full w-auto h-auto object-contain ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      )}
    </>
  );
}
