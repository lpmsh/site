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
            <div
                className={cn(
                    "rounded-md bg-custom-500 px-2 py-1 lg:px-6 lg:py-2 w-fit    text-sm font-semibold text-white shadow-sm transition duration-300 delay-75 ease-in-out hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                    props.className
                )}
            >
                {children}
            </div>
        </a>
    );
}

 
