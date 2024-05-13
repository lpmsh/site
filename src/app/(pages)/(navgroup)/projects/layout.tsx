import { ReactNode } from "react";
import { redirect } from "next/navigation";

export default function ProjectsLayout({children}: {children: ReactNode}){
    return <div className="md:px-12 px-4">{children}</div>
}