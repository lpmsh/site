import Nav from "@/components/Nav/Nav";
import { ReactNode } from "react";

export default function BlogSummaryLayout({children}: {children: ReactNode}){
    return (
        <div className="h-[100dvh] px-12"><Nav/>{children}</div>
    )
}