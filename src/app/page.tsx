import SocialLinks from "@/components/Nav/SocialLinks";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex justify-center ">
      <div className="sm:max-w-[70%] lg:w-[50%] sm:absolute sm:px-0 px-6 top-0 left-[96px] flex flex-col items-start pt-10 sm:pt-24 lg:border-red-500 md:border-yellow-500 sm:border-green-500">
        <div>
          Liam Monaghan{" "}
          <a className="mt-8" target="_blank" href="https://light.lpm.sh">
            💡
          </a>
        </div>

        <div className="pt-8">
          Christian, developer,{" "}
          <a href="/photos" className="text-neutral-500 hover:text-neutral-600 underline">
            photographer
          </a>
          , and sports fan. Usually{" "}
          <a href="https://github.com/lpmsh" target="_blank" className="text-neutral-500 hover:text-neutral-600 underline">
            coding
          </a>
          {" "}or with friends. Sometimes I{" "}
          <a href="/blog" className="text-neutral-500 hover:text-neutral-600 underline">
            write
          </a>
          .
        </div>

        {/*<div className="pt-8">
          I'm currently hacking on{" "}
          <a href="https://promptiac.com?utm_source=lpmsh" target="_blank" className="text-blue-500 hover:text-opacity-70">
            Promptiac
          </a>
          .
        </div>*/}

        <div className="pt-8">
          CS at{" "}
          <a href="https://purdue.edu" target="_blank" className="text-[#CFB991] hover:text-opacity-70 underline">
            Purdue
          </a>
          . Previously interned at{" "}
          <a href="https://flowglad.com" target="_blank" className="text-[#DD7D2A] hover:text-opacity-70 underline">
            Flowglad
          </a>{" "}
          and{" "}
          <a href="https://roda.com" target="_blank" className="text-[#1D6CDC] hover:text-opacity-70 underline">
            Roda
          </a>
          .
        </div>

        <div className="pt-8">
          Wanna chat?{" "}
          <Link className="text-neutral-500 hover:text-neutral-600 underline" target="_blank" href={"https://cal.com/liammonaghan/30min"}>
            Book a call
          </Link>
          .
        </div>

        <div className="fixed bottom-8">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
