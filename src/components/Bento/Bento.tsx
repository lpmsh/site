import { FC, ReactNode } from "react";
import PhotoBento from "./Items/Photo";
import { ProjectsBento } from "./Items/Projects";
import BlogBento from "./Items/Blog";

import Spotlight, { SpotlightCard } from "../Spotlight";

const bentoConfig: { double: boolean; component: FC }[] = [
    { double: true, component: ProjectsBento },
    { double: false, component: PhotoBento },
    { double: false, component: BlogBento },
];

export default function Bento() {
    return (
        <div className="w-full">
            <Spotlight className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-4">
                {bentoConfig.map((item, i) => {
                    const ItemComponent = item.component;
                    return (
                        <SpotlightCard
                            key={i}
                            className={`grow sm:row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-6 dark:bg-neutral-900 ${
                                item.double ? "sm:col-span-2" : ""
                            }`}
                        >
                            <ItemComponent />
                            {/* <div key={i} >
                            </div> */}
                        </SpotlightCard>
                    );
                })}
            </Spotlight>
            <div className="flex flex-col gap-y-3 md:hidden ">
                {bentoConfig.map((item, i) => {
                    const ItemComponent = item.component;
                    return (
                        <div key={i} className={`rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900`}>
                            <ItemComponent />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
