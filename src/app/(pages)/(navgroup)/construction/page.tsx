import { Header } from "@/components/Nav/Header";
import { IconHome } from "@tabler/icons-react";

export default function ConstructionPage() {
    return (
        <div className="flex justify-center h-[70dvh]">
            <div className="flex flex-col justify-center items-center gap-y-6">
                <div className="text-8xl">🚨</div>
                <div className="text-8xl font-bold text-center">This page is under construction.</div>

                <a href="/">
                    <div className="mt-4 flex gap-x-2 jusitfy-center items-center bg-custom-500 w-fit p-2 rounded-md text-black">
                        <IconHome className="w-10 h-10" />
                        <div className="font-semibold text-3xl">Go Home</div>
                    </div>
                </a>
            </div>
        </div>
    );
}
