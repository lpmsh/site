import { ReactNode } from "react";

export default function DevLayout({children}: {children: ReactNode}){
    return <div className="md:px-12">{children}</div>
}