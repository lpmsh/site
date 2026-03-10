import SocialLinks from "@/components/Nav/SocialLinks";
import Greeting from "@/components/Greeting";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex justify-center ">
      <div className="sm:max-w-[70%] lg:w-[50%] sm:absolute sm:px-0 px-6 top-0 left-[96px] flex flex-col items-start pt-10 sm:pt-24 lg:border-red-500 md:border-yellow-500 sm:border-green-500">
        <div>
          <Greeting />{" "}
          <a className="mt-8" target="_blank" href="https://light.lpm.sh">
            💡
          </a>
        </div>

        <div className="pt-8">
          Christian. Developer.{" "}
          <a href="/photos" className="text-neutral-500 hover:text-neutral-600 underline">
            Photographer
          </a>
          . Studying CS at{" "}
          <a href="https://purdue.edu" target="_blank" className="text-[#CFB991] hover:text-opacity-70 underline">
            Purdue
          </a>
          .
        </div>

        <div className="pt-8">
          Previously built software at{" "}
          <a href="https://flowglad.com" target="_blank" className="text-[#DD7D2A] hover:text-opacity-70 underline">
            Flowglad
          </a>{" "}
          and{" "}
          <a href="https://roda.com" target="_blank" className="text-[#1D6CDC] hover:text-opacity-70 underline">
            Roda
          </a>
          . I{" "}
          <a href="https://github.com/lpmsh" target="_blank" className="text-neutral-500 hover:text-neutral-600 underline">
            code
          </a>
          ,{" "}
          <a href="/blog" className="text-neutral-500 hover:text-neutral-600 underline">
            write
          </a>
          , and{" "}
          <Link className="text-neutral-500 hover:text-neutral-600 underline" target="_blank" href={"https://cal.com/liammonaghan/30min"}>
            chat
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
