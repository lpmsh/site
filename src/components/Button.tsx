import { cn } from "@/utils/cn";
import React, {
    AnchorHTMLAttributes,
    PropsWithChildren,
    ReactNode,
} from "react";

interface ButtonProps extends React.HTMLProps<HTMLAnchorElement> {
    children?: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
    return (
        <a {...props} className="w-fit">
            <div className={cn("rounded-md bg-custom-500 px-2 py-1 sm:px-6 py-2 w-fit", props.className)}>
                {children}
            </div>
        </a>
    );
}
