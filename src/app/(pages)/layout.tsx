import { IconArrowLeft } from "@tabler/icons-react";
import { ReactNode } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <a href="/" className="md:max-w-[50%] md:px-0 px-6 flex justify-start w-full py-4">
                <div className="flex gap-x-4 items-center">
                    <IconArrowLeft className="text-custom-500" />
                    <div className="text-black">LPM</div>
                </div>
            </a>
            <div className="w-full md:max-w-[50%] md:px-0 px-6">
                {children}
            </div>
        </div>
    );
}
