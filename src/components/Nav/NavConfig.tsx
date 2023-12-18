import { Icon, IconBackpack, IconCamera, IconCode, IconHome, IconPencil, TablerIconsProps } from "@tabler/icons-react";
import { cn } from "@/utils/cn";

export interface NavLink {
    icon: (props: TablerIconsProps) => JSX.Element;
    title: string;
    href: NavHref;
}

export const navLinkHrefs = ["/blog", "/photos", "/", "/dev", "/gear"] as const;
export type NavHref = (typeof navLinkHrefs)[number];

export const navLinks: NavLink[] = [
    {
        icon: IconHome,
        title: "Home",
        href: "/"
    },
    {
        icon: IconPencil,
        title: "Blog",
        href: "/blog",
    },
    {
        icon: IconCamera,
        title: "Photos",
        href: "/photos",
    },
    {
        icon: IconCode,
        title: "Dev",
        href: "/dev",
    },
    // {
    //     icon: IconBackpack,
    //     title: "Gear",
    //     href: "/gear",
    // },
];

