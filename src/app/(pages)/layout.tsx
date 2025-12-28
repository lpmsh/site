import { ReactNode } from "react";
import { BackButton } from "@/components/Nav/BackButton";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <BackButton/>
            <div className="w-full md:max-w-[50%] md:px-0 px-6">
                {children}
            </div>
        </div>
    );
}
