"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export type Photo = {
  url: string;
  width: number;
  height: number;
  blurDataURL: string;
  alt?: string;
};

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<Photo | null>(null);

  const close = useCallback(() => setActive(null), []);

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
        {photos.map((photo) => (
          <button
            key={photo.url}
            type="button"
            onClick={() => setActive(photo)}
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
          <Image
            src={active.url}
            width={active.width}
            height={active.height}
            placeholder="blur"
            blurDataURL={active.blurDataURL}
            alt={active.alt ?? ""}
            sizes="100vw"
            priority
            className="max-h-full max-w-full w-auto h-auto object-contain"
          />
        </div>
      )}
    </>
  );
}
