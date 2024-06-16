import { FC, ReactNode } from "react";
import PhotoBento from "./Items/Photo";
import { ProjectsBento } from "./Items/Projects";
import BlogBento from "./Items/Blog";

import Spotlight, { SpotlightCard } from "../Spotlight";
import Card from "../Card";
import { getPosts } from "@/sanity/post";

const bentoConfig: { double: boolean; component: (props: any) => JSX.Element }[] = [
    { double: true, component: ProjectsBento },
    { double: false, component: PhotoBento },
    { double: false, component: BlogBento },
];

export default async function Bento() {
    const posts = await getPosts();

    return (
        <div className="w-full pb-8 px-2">
            <div className="flex flex-col gap-y-4">
                <Card>
                    <ProjectsBento />
                </Card>

                <Card>
                    <BlogBento posts={posts} />
                </Card>
                <Card>
                    <PhotoBento />
                </Card>
            </div>
        </div>
    );
}
