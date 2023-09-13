import { ReactNode } from "react";
import { redirect } from "next/navigation";

export default function DevLayout({children}: {children: ReactNode}){
    redirect("/construction")
    return <div className="md:px-12">{children}</div>
}