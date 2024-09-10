import { Header } from "@/components/Nav/Header";
import { ReactNode } from "react";

export default function PagesLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex justify-center w-full mb-8">
            <div className="md:max-w-[75%] lg:max-w-[65%] px-4 md:px-6 lg:px-12 w-full">
                <div className="mt-6 mb-10">
                    <Header />
                </div>
                {children}
            </div>
        </div>
    );
}
