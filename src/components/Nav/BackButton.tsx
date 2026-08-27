"use client";

import { IconArrowLeft } from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";
import { useNavigation } from "./NavigationProvider";
import logo from "@/app/logo.png";
import Image from "next/image";

// The fallback destination when there is no in-app history to go back to:
// the parent page one segment up (e.g. /blog/some-post -> /blog), or the root
// for top-level pages (e.g. /blog -> /).
function getParentPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length <= 1) return "/";
  segments.pop();
  return "/" + segments.join("/");
}

export function BackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const { hasInternalHistory } = useNavigation();

  const handleBack = () => {
    if (hasInternalHistory()) {
      router.back();
    } else {
      router.push(getParentPath(pathname));
    }
  };

  return (
    <button onClick={handleBack} className="md:max-w-[50%] md:px-0 px-6 flex justify-start w-full py-4">
      <div className="flex gap-x-4 items-center">
        <Image src={logo} alt="logo" className="w-6" />
      </div>
    </button>
  );
}
