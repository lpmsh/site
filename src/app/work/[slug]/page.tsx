import { getWorkPost } from "@/sanity/work";
import { IconArrowLeft, IconArrowUpRight } from "@tabler/icons-react";
import { Carousel } from "@/components/Carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PortableTextWrapper } from "@/sanity/utils/PortableTextWrapper";

export default async function WorkPage({ params: { slug } }: { params: { slug: string } }) {
  const workPost = await getWorkPost(slug);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full md:max-w-[60%] ">
        <div className="md:px-0 px-6 w-full">
          <div className="flex items-center justify-between py-8">
            <div className="flex gap-x-2 items-center">
              <Link href="/work" className="flex items-center">
                <IconArrowLeft className="text-custom-500" />
              </Link>
              <div className="text-4xl">{workPost.title}</div>
            </div>
            <Link target="_blank" href={workPost.link}>
              <Button className="flex gap-x-2 items-center bg-custom-500 hover:bg-custom-600">
                Check it out <IconArrowUpRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
        <div className="h-[300px] w-full">
          <Carousel workPosts={[workPost]} imageHeight={325} className="flex justify-between mx-6 md:mx-0" />
        </div>
        <div className="pt-20">
          <PortableTextWrapper content={workPost.content} />
        </div>
      </div>
    </div>
  );
}
