import { IconBrandTwitter, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

export default function SocialLinks() {
    return (
        <div className="rounded-xl  flex gap-x-2 w-fit">
            <a
                className="text-custom-500 transition duration-300 delay-75 ease-in-out hover:text-neutral-600"
                href="https://github.com/slyguy5646"
                target="_blank"
            >
                <IconBrandGithub className="sm:w-6 w-8 sm:h-6 h-8"/>
            </a>
            <a
                className="text-custom-500 transition duration-300 delay-75 ease-in-out hover:text-blue-500"
                href="https://www.linkedin.com/in/liampmonaghan/"
                target="_blank"
            >
                <IconBrandLinkedin className="sm:w-6 w-8 sm:h-6 h-8"/>
            </a>
            <a
                className="text-custom-500 transition duration-300 delay-75 ease-in-out hover:text-[#C128BF]"
                href="https://instagram.com/lpm_visuals"
                target="_blank"
            >
                <IconBrandInstagram className="sm:w-6 w-8 sm:h-6 h-8"/>
            </a>
            <a
                className="text-custom-500 transition duration-300 delay-75 ease-in-out hover:text-cyan-500"
                href="https://twitter.com/lmon_25"
                target="_blank"
            >
                <IconBrandTwitter className="sm:w-6 w-8 sm:h-6 h-8"/>
            </a>
        </div>
    );
}
