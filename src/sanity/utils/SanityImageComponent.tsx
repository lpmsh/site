import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { clientConfig } from "@/sanity/config/clientConfig";
import { cn } from "@/utils/cn";

// // Barebones lazy-loaded image component
export const SanityImageComponent = ({ value, className }: { value: any; className?: string }) => {
    const { width, height } = getImageDimensions(value);
    return (
        <>
            <img
                className={cn("w-full", className)}
                src={urlBuilder(clientConfig)
                    .image(value)
                    // .width(isInline ? 100 : 800)
                    .fit("max")
                    .auto("format")
                    .url()}
                alt={value.alt || " "}
                loading="lazy"
                style={{
                    // Avoid jumping around with aspect-ratio CSS property
                    aspectRatio: width / height,
                }}
            />
            <div className="text-base text-neutral-500">{value.caption}</div>
        </>
    );
};
