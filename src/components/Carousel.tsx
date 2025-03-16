"use client";
import { SanityImageComponent } from "@/sanity/utils/SanityImageComponent";
import { WorkPostWithoutContent } from "@/sanity/work";
import { motion } from "motion/react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/utils/cn";
import { useMemo } from "react";

export function Carousel({ workPosts, imageHeight, className }: { workPosts: WorkPostWithoutContent[]; imageHeight?: number; className?: string }) {
  const carouselItemsMapped = useMemo(() => {
    return workPosts.map((workPost) => workPost.images.map((wpImg) => ({ ...workPost, image: wpImg, images: undefined }))).flat();
  }, [workPosts]);
  return (
    <ScrollArea className="w-full">
      <motion.div initial={{ paddingLeft: 50 }} animate={{ padding: 0 }} className={cn("flex gap-x-6 items-center mx-4", className)}>
        {carouselItemsMapped.map((post, postIdx) => (
          <motion.a
            initial={{ paddingLeft: 100, opacity: 0 }}
            animate={{ paddingLeft: 0, opacity: 1 }}
            transition={{ delay: (postIdx + 1) * 0.08 }}
            href={`/work/${post.slug}`}
            className="w-max"
          >
            <SanityImageComponent
              style={{ height: imageHeight || 450 }}
              value={post.image.image}
              className="w-full rounded-[20px] border border-neutral-200 shadow"
            />
            <div className="text-sm text-neutral-400/80 pt-2">{post.title}</div>
          </motion.a>
        ))}
      </motion.div>
      <ScrollBar orientation="horizontal" className="hidden" />
    </ScrollArea>
  );
}
