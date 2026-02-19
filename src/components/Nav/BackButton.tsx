"use client";

import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useNavigation } from "./NavigationProvider";

export function BackButton() {
  const router = useRouter();
  const { hasInternalHistory } = useNavigation();

  const handleBack = () => {
    if (hasInternalHistory()) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button onClick={handleBack} className="md:max-w-[50%] md:px-0 px-6 flex justify-start w-full py-4">
      <div className="flex gap-x-4 items-center">
        <IconArrowLeft className="text-neutral-500" />
        <div className="text-black">LPM</div>
      </div>
    </button>
  );
}
