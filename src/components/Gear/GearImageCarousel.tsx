"use client";

import { useEffect, useState } from "react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { GearPostImage } from "@/sanity/gear";
import { SanityImageComponent } from "@/sanity/utils/SanityImageComponent";

export function GearImageCarousel({ images }: { images: GearPostImage[] }) {
    const [index, setIndex] = useState(0);
    const [visibleImages, setVisibleImage] = useState<GearPostImage[]>([]);

    useEffect(() => {
        setVisibleImage([images[index], images[index + 1]]);
    }, [index]);

    function next() {
        setIndex(index + 2 > images.length - 1 ? 0 : index + 1);
    }

    function previous() {
        setIndex(index - 1 < 0 ? images.length - 2 : index - 1);
    }
    return (
        <div className="text-neutral-600 flex items-center justify-between w-full py-10">
            <button onClick={() => previous()}>
                <IconChevronLeft className="w-10 h-10" />
            </button>

            {visibleImages.map(({ image, alt }, i: number) => (
                <div className="rounded-md bg-neutral-500 flex-[0.475]">
                    <SanityImageComponent value={image} className="object-cover h-80 rounded-md" />
                </div>
            ))}

            <button onClick={() => next()}>
                <IconChevronRight className="w-10 h-10" />
            </button>
        </div>
    );
}
