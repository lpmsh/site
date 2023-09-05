"use client";

import Button from "@/components/Button";
import CodeText from "@/components/CodeText";
import { IconArrowRight, IconCode } from "@tabler/icons-react";

export default function DevBento() {
    return (
        <div className="relative h-[325px] md:h-full overflow-hidden">
            <div className="flex justify-between  md:justify-normal md:gap-x-2 gap-x-0  items-center pb-2">
                <div className="text-xl font-bold">Dev</div>
                <div>
                    <a href="/dev">
                        <IconArrowRight className="text-custom-500" />
                    </a>
                </div>
            </div>
            <div className="md:max-w-[55%] lg:max-w-[50%] md:flex flex-col gap-y-2">
                <div className="md:mb-0 mb-4">
                    I have experience in several areas. Some of my most prominent projects are{" "}
                    <a href="https://studysail.com" target="_blank" className="text-cyan-500 font-semibold">
                        StudySail
                    </a>{" "}
                    and{" "}
                    <a href="https://puppopool.com" target="_blank" className="text-amber-200 font-semibold">
                        PuppoPool
                    </a>
                    . My primary skillset includes React, Tailwind, NextJS, Sanity, Typescript, Prisma, and{" "}
                    <a href="/stack" className="text-blue-200 font-semibold">
                        more
                    </a>
                    .
                </div>
            </div>

            <MiniCodeEditor />
        </div>
    );
}

const code = `export class LPM {
  

}
`;

function MiniCodeEditor() {
    return (
        <div className="absolute w-full  md:h-full -bottom-4 md:-bottom-6 right-0 md:-right-6 border-2 border-slate-400/10 p-4 rounded-xl md:max-w-[45%] lg:max-w-[50%] bg-neutral-800">
            <CodeText code={code} />
        </div>
    );
}
