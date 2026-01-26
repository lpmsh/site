"use client";

import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export function BackButton() {
  const { back } = useRouter();
  return (
    <button onClick={back} className="md:max-w-[50%] md:px-0 px-6 flex justify-start w-full py-4">
      <div className="flex gap-x-4 items-center">
        <IconArrowLeft className="text-neutral-500" />
        <div className="text-black">LPM</div>
      </div>
    </button>
  );
}
