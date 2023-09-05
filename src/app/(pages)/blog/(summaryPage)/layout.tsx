import {Header} from "@/components/Nav/Header";
import { ReactNode } from "react";

export default function BlogSummaryLayout({ children }: { children: ReactNode }) {
    return (
        <div className="h-[100dvh] px-12">
            <Header />
            {children}
        </div>
    );
}
