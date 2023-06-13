import {
    IconBrandTwitter,
    IconBrandGithub,
    IconBrandInstagram,
} from "@tabler/icons-react";
import { cn } from "@/utils/cn";

export interface NavLink {
    title: string;
    href: string;
}

export interface NavSocial {
    icon: JSX.Element;
    bigIcon: JSX.Element;
    href: string;
}

export const navLinks: NavLink[] = [
    {
        title: "Blog",
        href: "/blog",
    },
    {
        title: "Photos",
        href: "/photos",
    },
    // {
    //     title: "Projects",
    //     href: "/projects",
    // },
];
export const navSocials: NavSocial[] = [
    // {
    //     icon: (
    //         <IconBrandTwitter className="w-8 h-8 text-custom-200 hover:text-custom-300 " />
    //     ),
    //     bigIcon: (
    //         <IconBrandTwitter className="w-12 h-12 text-custom-200 hover:text-custom-300 " />
    //     ),
    //     href: "https://twitter.com/lmon_25",
    // },
    ///////////////WHEN ADDING TWITTER BACK GO TO Nav.tsx AND CHECK COMMENT TO FIX STYLING
    {
        icon: (
            <IconBrandInstagram className="w-8 h-8 text-custom-200 hover:text-custom-300 " />
        ),
        bigIcon: (
            <IconBrandInstagram className="w-12 h-12 text-custom-200 hover:text-custom-300 " />
        ),
        href: "https://instagram.com/lpm_visuals",
    },
    {
        icon: (
            <IconBrandGithub className="w-8 h-8 text-custom-200 hover:text-custom-300 " />
        ),
        bigIcon: (
            <IconBrandGithub className="w-12 h-12 text-custom-200 hover:text-custom-300 " />
        ),
        href: "https://github.com/slyguy5646",
    },
];

export function NavSocialComponent({
    icon,
    bigIcon,
    href,
    big,
}: NavSocial & { big: boolean }) {
    return (
        <a href={href} target="_blank">
            {big ? bigIcon : icon}
        </a>
    );
}
