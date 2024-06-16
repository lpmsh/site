import { cn } from "@/utils/cn";
import { ReactNode } from "react";

export default function Card({children, className}:{children: ReactNode, className?: string}){
    return <div className={cn("rounded-xl border-[0.75px] border-slate-400/10 bg-neutral-100 p-6 dark:bg-neutral-900", className)}>{children}</div>;
}