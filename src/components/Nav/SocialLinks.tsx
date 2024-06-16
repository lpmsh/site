import { IconBrandTwitter, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

export default function SocialLinks() {
    return (
        <div className="rounded-xl  flex gap-x-2 w-fit">
            <a
                className="text-white transition duration-300 delay-75 ease-in-out hover:text-neutral-300"
                href="https://github.com/slyguy5646"
                target="_blank"
            >
                <IconBrandGithub className="w-8 h-8"/>
            </a>
            <a
                className="text-white transition duration-300 delay-75 ease-in-out hover:text-custom-500"
                href="https://www.linkedin.com/in/liampmonaghan/"
                target="_blank"
            >
                <IconBrandLinkedin className="w-8 h-8"/>
            </a>
            <a
                className="text-white transition duration-300 delay-75 ease-in-out hover:text-[#C128BF]"
                href="https://instagram.com/lpm_visuals"
                target="_blank"
            >
                <IconBrandInstagram className="w-8 h-8"/>
            </a>
            <a
                className="text-white transition duration-300 delay-75 ease-in-out hover:text-cyan-500"
                href="https://twitter.com/lmon_25"
                target="_blank"
            >
                <IconBrandTwitter className="w-8 h-8"/>
            </a>
        </div>
    );
}
