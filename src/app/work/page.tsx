import { getWorkPostsWithoutContent } from "@/sanity/work";
import { IconArrowLeft } from "@tabler/icons-react";
import { Carousel } from "@/components/Carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function WorkPage() {
  const workPosts = await getWorkPostsWithoutContent();

  return (
    <div className="flex flex-col justify-center items-center pt-4">
      {/* <a href="/" className="md:max-w-[50%] md:px-0 px-6 flex justify-start w-full py-4">
        <div className="flex gap-x-8 items-center">
          <IconArrowLeft className="text-custom-500" />
          <div className="text-black">LPM</div>
        </div>
      </a> */}
      <div className="w-full md:px-0 px-6 flex flex-col items-center justify-center">
        <Carousel workPosts={workPosts.sort((a, b) => a.order - b.order)} />
        <div className="md:max-w-[50%] w-full pt-8 ">
          I've built apps, websites, and more for both clients and personal projects.
          <br />
          <br />
          I'd love to work on your project!
          <div className="py-6 flex gap-x-2 items-center">
            <Link href="mailto:hello@lpm.sh">
              <Button variant={"ghost"}>Email Me</Button>
            </Link>
            <Link href="https://cal.com/liammonaghan/30min" target="_blank">
              <Button className="bg-custom-500 hover:bg-custom-600">Book a Call</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
