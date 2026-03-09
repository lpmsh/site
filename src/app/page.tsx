import SocialLinks from "@/components/Nav/SocialLinks";
import Link from "next/link";

export default function Home() {
  return (
    <div className="retro-crt w-full min-h-screen flex justify-center bg-black">
      <div className="retro-scanlines" />
      <div className="sm:max-w-[70%] lg:w-[50%] sm:absolute sm:px-0 px-6 top-0 left-[96px] flex flex-col items-start pt-10 sm:pt-24 font-mono text-green-400 z-10">
        <div className="text-xl tracking-widest">
          <span className="retro-blink">_</span> Liam Monaghan{" "}
          <a className="mt-8" target="_blank" href="https://light.lpm.sh">
            💡
          </a>
        </div>

        <div className="pt-8 leading-relaxed retro-text">
          {">"} I&apos;m a Christian, student, developer,{" "}
          <a href="/photos" className="text-amber-400 hover:text-amber-300 underline decoration-dotted underline-offset-4">
            photographer
          </a>
          , Pittsburgh and Ohio State sports fan, and can&apos;t live without music. You can usually find me{" "}
          <a href="https://github.com/lpmsh" target="_blank" className="text-amber-400 hover:text-amber-300 underline decoration-dotted underline-offset-4">
            coding
          </a>{" "}
          or hanging out with friends. I also occasionally{" "}
          <a href="/blog" className="text-amber-400 hover:text-amber-300 underline decoration-dotted underline-offset-4">
            write about things
          </a>
          .
        </div>

        <div className="pt-8 retro-text">
          {">"} Currently studying computer science at{" "}
          <a href="https://purdue.edu" target="_blank" className="text-[#CFB991] hover:brightness-125 underline decoration-dotted underline-offset-4">
            Purdue
          </a>
          .
        </div>
        <div className="pt-2 retro-text">
          {">"} Previously a software engineer intern for{" "}
          <a href="https://flowglad.com" target="_blank" className="text-[#DD7D2A] hover:brightness-125 underline decoration-dotted underline-offset-4">
            Flowglad
          </a>{" "}
          and{" "}
          <a href="https://roda.com" target="_blank" className="text-[#5B9BF0] hover:brightness-125 underline decoration-dotted underline-offset-4">
            Roda
          </a>
          .
        </div>

        <div className="pt-8 retro-text">
          {">"} Wanna chat?{" "}
          <Link className="text-amber-400 hover:text-amber-300 underline decoration-dotted underline-offset-4" target="_blank" href={"https://cal.com/liammonaghan/30min"}>
            Book a call
          </Link>
          .<span className="retro-blink ml-1">█</span>
        </div>

        <div className="fixed bottom-8">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
