import { IconArrowRight, IconPencil } from "@tabler/icons-react";

export default function BlogBento() {
    return (
        <div className="relative h-fit overflow-hidden">
            <div className="flex justify-between  md:justify-normal md:gap-x-2 gap-x-0  items-center pb-2">
                <div className="flex gap-x-2 items-center">
                    <IconPencil />
                    <div className="text-xl font-bold">Blog</div>
                </div>
                <div>
                    <a href="/blog">
                        <IconArrowRight className="text-custom-500" />
                    </a>
                </div>
            </div>

            <div>I'm starting to write about new ideas and learning new tech! Check it out...</div>
        </div>
    );
}
