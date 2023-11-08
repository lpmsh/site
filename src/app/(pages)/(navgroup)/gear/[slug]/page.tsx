import { GearImageCarousel } from "@/components/Gear/GearImageCarousel";
import { Header } from "@/components/Nav/Header";
import { NavDrawer } from "@/components/Nav/NavDrawer";
import { getGearPost } from "@/sanity/gear";

export default async function GearPost({ params: { slug } }: { params: { slug: string } }) {
    const { title, _createdAt, content, category, images } = await getGearPost(slug);

    return (
        <div className="px-12 pt-4">
            <div className="flex flex-col gap-y-3">
                <div className="font-semibold text-5xl">{title}</div>
                <div className="text-neutral-700 text-lg">{category}</div>
            </div>

            <GearImageCarousel images={images}/>
        </div>
    );
}
