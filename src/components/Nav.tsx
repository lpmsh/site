"use client";

import * as React from "react";
import {
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";

import { usePathname } from "next/navigation";

function Nav() {
  const pathname = usePathname();

  return (
    <div className=" flex w-full justify-between items-center gap-x-12 self-start  py-4">
      <a href="/" className="text-6xl font-black">LPM</a>
      <div className="flex justify-between items-center gap-x-4 text-xl font-bold">
        <a
          className={`text-slate-200 hover:text-slate-300 hover:cursor-pointer `}
          href="/blog"
        >
          Blog
        </a>
        <a
          className={`text-slate-200 hover:text-slate-300 hover:cursor-pointer `}
          href="/photos"
        >
          Photos
        </a>
        <a
          className={` hover:text-slate-300 hover:cursor-pointer `}
          href="/projects"
        >
          Projects
        </a>
      </div>
      <div className="flex items-center gap-x-4">
        <a href="https://twitter.com/lmon_25" target="_blank">
          <IconBrandTwitter className="w-8 h-8 text-custom-200 hover:text-custom-300 " />
        </a>
        <a href="https://instagram.com/lpm_visuals" target="_blank">
          <IconBrandInstagram className="w-8 h-8 text-custom-200 hover:text-custom-300 " />
        </a>
        <a href="https://github.com/slyguy5646" target="_blank">
          <IconBrandGithub className="w-8 h-8 text-custom-200 hover:text-custom-300 " />
        </a>
      </div>
    </div>
  );
}

export default Nav;
