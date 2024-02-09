"use client";

import Button from "@/components/Button";
import CodeText from "@/components/CodeText";
import { IconArrowRight, IconCode } from "@tabler/icons-react";

export default function DevBento() {
    return (
        <div className="h-full w-full flex md:flex-row flex-col items-center justify-between">
            <div className="flex-[0.5] w-full flex flex-col justify-start h-full">
                <div className="flex justify-between  md:justify-normal md:gap-x-2 gap-x-0  items-center pb-2 w-full">
                    <div className="flex items-center gap-x-2">
                        <IconCode />
                        <div className="text-xl font-bold">Dev</div>
                    </div>
                    <div>
                        <a href="/dev">
                            <IconArrowRight className="text-custom-500" />
                        </a>
                    </div>
                </div>
                <div className="w-full md:flex flex-col gap-y-2">
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
                    </div>
                </div>
            </div>

            <MiniCodeEditor />
        </div>
    );
}

const code = `export class LPM {
  public blog: BlogPost[];
  public photos: Photo[];
  
}
`;

function MiniCodeEditor() {
    return (
        <div className="w-full md:w-[85%] flex-[0.5] flex items-end justify-center">
            <div className="w-full  border-t-2 border-l-2 md:border-r-0 border-r-2 border-slate-400/10 p-4 rounded-tl-xl rounded-tr-xl md:rounded-tr-none bg-neutral-800">
                <CodeText code={code} />
            </div>
        </div>
    );
}
