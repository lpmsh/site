import { GearPostWithoutContent, getGearPostsWithoutContent, sortGearPostsByCategory } from "@/sanity/gear";

export default async function GearPage() {
    const gear = await getGearPostsWithoutContent();
    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center bg-background pb-12">
            <div className="container mx-auto min-h-screen">
                <div className="flex justify-center items-start ">
                    <div className="  w-full max-w-[1000px] flex flex-col  items-start gap-y-8 px-4 sm:px-10">
                        <div className="w-full -ml-2">
                            {Object.entries(sortGearPostsByCategory(gear)).map((entry, i) => {
                                const title = entry[0];
                                const gearItems = entry[1];
                                return (
                                    <div key={i} className="pb-8">
                                        <div className="ml-2 text-3xl font-bold">{title}</div>
                                        <div>
                                            {gearItems.map((item) => (
                                                <GearItemLink key={item._id} {...item} />
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function GearItemLink({ title, category, slug }: GearPostWithoutContent) {
    return (
        <a href={`/gear/${slug}`}>
            <div className="text-lg py-1 w-full hover:bg-neutral-900 px-2 rounded-sm hover:underline hover:decoration-custom-500">{title}</div>
        </a>
    );
}
