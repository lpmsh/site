import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

interface ChipProps {
  title: string;
  className: string;
}

function Chip({ title, className }: ChipProps) {
  return (
    <div
      className={cn(
        `m-1 ml-2 flex items-center justify-center rounded-full border bg-opacity-40 px-2 py-1 text-base font-medium`,
        className
      )}
    >
      <div className="max-w-full flex-initial text-xs font-normal leading-none">
        {title}
      </div>
    </div>
  );
}

export default Chip;
