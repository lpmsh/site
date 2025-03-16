import { cn } from "@/utils/cn";
import React, { AnchorHTMLAttributes, PropsWithChildren, ReactNode } from "react";

interface ButtonProps extends React.HTMLProps<HTMLAnchorElement> {
  children?: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <a {...props} className="w-fit hover:cursor-pointer">
      <div
        className={cn(
          "rounded-md bg-custom-500 px-3 py-2 w-fit    text-sm font-semibold text-white shadow-sm transition duration-300 delay-75 ease-in-out hover:bg-custom-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
          props.className,
        )}
      >
        {children}
      </div>
    </a>
  );
}
