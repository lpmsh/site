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
          I&apos;m a Christian, student, developer,{" "}
          <a href="/photos" className="text-custom-500 hover:text-custom-600">
            photographer
          </a>
          , Pittsburgh and Ohio State sports fan, and can't live without music. You can usually find me{" "}
          <a href="https://github.com/slyguy5646" target="_blank" className="text-custom-500 hover:text-custom-600">
            coding
          </a>{" "}
          or hanging out with friends. I also occasionally{" "}
          <a href="/blog" className="text-custom-500 hover:text-custom-600">
            write about things
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
          I'm currently studying computer science at{" "}
          <a href="https://purdue.edu" target="_blank" className="text-[#CFB991] hover:text-opacity-70">
            Purdue
          </a>
          .
        </div>

        <div className="pt-8">
          Wanna chat?{" "}
          <Link className="text-custom-500 hover:text-custom-600" target="_blank" href={"https://cal.com/liammonaghan/30min"}>
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
