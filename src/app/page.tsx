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

        <div className="pt-8">
          I'm a co-founder of{" "}
          <a href="https://mergi.co" target="_blank" className="text-[#deb114] hover:text-opacity-70">
            Mergi
          </a>
          ...
        </div>
        <div className="pt-2">
          and I'm hacking on{" "}
          <a href="https://articlu.com?utm_source=lpmsh" target="_blank" className="text-[#cd678f] hover:text-opacity-70">
            Articlu
          </a>{" "}
          and{" "}
          <a href="https://myaicoverletter.com?utm_source=lpmsh" target="_blank" className="text-[#468671] hover:text-opacity-70">
            My AI Cover Letter
          </a>
          .
        </div>
        <div className="pt-8">
          I also sell prints of my photos. You can get them{" "}
          <a target="_blank" href="https://lpmvisuals.etsy.com" className="text-custom-500 hover:text-custom-600">
            here
          </a>
          .
        </div>
        <div className="pt-8">
          Need a new website or have an idea for a project? You can check out my work and book a call{" "}
          <Link className="text-custom-500 hover:text-custom-600" href={"/work"}>
            here
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
