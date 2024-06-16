import { ReactNode } from "react";

export default function PagesLayout({children}: {children: ReactNode}){
    return (
        <div>{children}</div>
    );
}