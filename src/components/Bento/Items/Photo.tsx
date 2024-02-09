import { IconArrowRight, IconCamera } from "@tabler/icons-react";

export default function PhotoBento() {
    return (
        <div className="relative h-fit overflow-hidden">
            <div className="flex justify-between  md:justify-normal md:gap-x-2 gap-x-0  items-center pb-2">
                <div className="flex items-center gap-x-2">
                    <IconCamera />
                    <div className="text-xl font-bold">Photography</div>
                </div>
                <div>
                    <a href="/photos">
                        <IconArrowRight className="text-custom-500" />
                    </a>
                </div>
            </div>

            <div>Photography is a passion of mine. I like to shoot just about anything!</div>
        </div>
    );
}
