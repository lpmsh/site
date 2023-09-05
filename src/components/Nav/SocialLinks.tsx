import { IconBrandTwitter, IconBrandGithub, IconBrandInstagram } from "@tabler/icons-react";

export default function SocialLinks() {
    return (
        <div className="rounded-xl bg-neutral-900 border-2 border-neutral-400/10 flex gap-x-2 p-4">
            <a
                className="text-white transition duration-300 delay-75 ease-in-out hover:text-custom-500"
                href="https://github.com/slyguy5646"
                target="_blank"
            >
                <IconBrandGithub />
            </a>
            <a
                className="text-white transition duration-300 delay-75 ease-in-out hover:text-custom-500"
                href="https://instagram.com/lpm_visuals"
                target="_blank"
            >
                <IconBrandInstagram />
            </a>
            <a
                className="text-white transition duration-300 delay-75 ease-in-out hover:text-custom-500"
                href="https://twitter.com/lmon_25"
                target="_blank"
            >
                <IconBrandTwitter />
            </a>
        </div>
    );
}
