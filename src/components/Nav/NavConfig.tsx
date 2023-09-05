import { Icon, IconCamera, IconPencil, TablerIconsProps } from "@tabler/icons-react";
import { cn } from "@/utils/cn";

export interface NavLink {
    icon: (props: TablerIconsProps) => JSX.Element;
    title: string;
    href: NavHref;
}

export const navLinkHrefs = ["/blog", "/photos"] as const;
export type NavHref = (typeof navLinkHrefs)[number];

export const navLinks: NavLink[] = [
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
    // {
    //     title: "Projects",
    //     href: "/projects",
    // },
];

