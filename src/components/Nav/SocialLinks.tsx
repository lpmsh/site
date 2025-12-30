import { IconBrandTwitter, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import Substack from "@/assets/substack.png";
import Image from "next/image";

export default function SocialLinks() {
  return (
    <div className="rounded-xl flex items-center gap-x-2 w-fit">
      <a
        className="text-custom-500 transition duration-300 delay-75 ease-in-out hover:text-neutral-600"
        href="https://github.com/slyguy5646"
        target="_blank"
      >
        <IconBrandGithub className="sm:w-6 w-8 sm:h-6 h-8" />
      </a>
      <a
        className="text-custom-500 transition duration-300 delay-75 ease-in-out hover:text-blue-500"
        href="https://www.linkedin.com/in/liampmonaghan/"
        target="_blank"
      >
        <IconBrandLinkedin className="sm:w-6 w-8 sm:h-6 h-8" />
      </a>
      <a
        className="text-custom-500 transition duration-300 delay-75 ease-in-out hover:text-[#C128BF]"
        href="https://instagram.com/lpm_visuals"
        target="_blank"
      >
        <IconBrandInstagram className="sm:w-6 w-8 sm:h-6 h-8" />
      </a>
      <a
        className="text-custom-500 transition duration-300 delay-75 ease-in-out hover:text-cyan-500"
        href="https://twitter.com/lmon_25"
        target="_blank"
      >
        <IconBrandTwitter className="sm:w-6 w-8 sm:h-6 h-8" />
      </a>
      <a
        className="text-custom-500 transition duration-300 delay-75 ease-in-out hover:text-custom-500"
        href="https://substack.com/@lpmsh"
        target="_blank"
      >
        <svg role="img" viewBox="0 0 24 24" className="sm:w-4.5 w-6.5" fill="#ff5e00" xmlns="http://www.w3.org/2000/svg">
          <title>Substack</title>
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
        </svg>
      </a>
    </div>
  );
}
