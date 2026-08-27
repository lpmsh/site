import * as React from "react";
import { cn } from "@/utils/cn";

function A({
  href,
  target,
  children,
  className,
}: {
  href: string;
  target?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={cn("text-neutral-700 hover:text-neutral-900 underline", className)}
      href={href}
      target={target}
    >
      {children}
    </a>
  );
}

export default A;
