import { ReactNode } from "react";
import "./blogcontent.css";
import { Header } from "@/components/Nav/Header";

export default function BlogContentLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
