import { NavDrawer } from "@/components/Nav/NavDrawer";
import { ReactNode } from "react";

export default function PagesLayout({children}: {children: ReactNode}){
    return (
        <div><NavDrawer/>{children}</div>
    );
}