import * as React from "react";
import {
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";
import A from "@/components/Anchor";
import BlogCard from "@/components/BlogCard";
import { allPosts } from "contentlayer/generated";

function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="h-[100dvh]  min-w-[400px] w-7/12 flex flex-col  items-start gap-y-8 p-8">
        <div className=" flex w-full justify-between items-center gap-x-12 self-start">
          <div className="text-6xl font-black">LPM</div>
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
        <div className="text-xl font-normal self-center justify-self-center">
          Hey!
          <span className="font-bold"> I'm Liam.</span> I'm a Christian,
          student, developer, photographer, roboticist, Pittsburgh and Ohio
          State sports fan, and an avid movie and music consumer. You can
          usually find me coding or with my{" "}
          <A href="https://frc8592.org">awesome robotics team</A>.
        </div>
        <div className="pt-8 text-2xl font-semibold">Recent Blog Posts</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 w-full">
          {allPosts.map((post) => (
            <BlogCard title={post.title} date={post.date} icon={post.icon} slug={post.slug}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
