"use client";

import AnimateHeight from "react-animate-height";
import { useState, createContext, useContext, Dispatch, SetStateAction, ReactNode, useEffect } from "react";
import { NavHref, NavLink, navLinks } from "./NavConfig";
import { IconArrowLeft } from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";

interface INavDrawerContext {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const NavDrawerContext = createContext<INavDrawerContext>({ open: false, setOpen: () => {} });

export function NavDrawerProvider({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState<boolean>(false);
    return <NavDrawerContext.Provider value={{ open, setOpen }}>{children}</NavDrawerContext.Provider>;
}

export function useNavDrawer() {
    return useContext(NavDrawerContext);
}

export function NavDrawer({ homePage }: { homePage?: boolean }) {
    const { open, setOpen } = useNavDrawer();
    const [currentPage, setCurrentPage] = useState<NavHref>("/photos");
    return (
        <AnimateHeight
            id="example-panel"
            duration={500}
            className="bg-custom-400 px-4 sm:px-10  w-full mx-auto bg-center  items-center justify-center  "
            height={open ? "auto" : 0}
        >
            {homePage ? (
                <div className="container mx-auto py-10">
                    <div className="flex justify-center items-start ">
                        <div className="  w-full max-w-[1000px] flex flex-col  items-start gap-y-8 px-4 sm:px-10">
                            {navLinks.map((link, index) => (
                                <NavDrawerLink link={link} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container mx-auto py-10">
                    <div className="flex justify-center items-start ">
                        <div className="  w-full flex flex-col  items-start gap-y-8">
                            {navLinks.map((link, index) => (
                                <NavDrawerLink link={link} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </AnimateHeight>
    );
}

function NavDrawerLink({ link }: { link: NavLink }) {
    const { href, icon: Icon, title } = link;
    const [isHovering, setIsHovering] = useState(false);
    const { push } = useRouter();
    const path = usePathname();
    const { setOpen } = useNavDrawer();
    const [isCurrentPage, setIsCurrentPage] = useState(false);

    function parsePath(path: string) {
        const split = path.split("/");

        split.shift();

        return split[0];
    }

    useEffect(() => {
        setIsCurrentPage(parsePath(path) == parsePath(href));
    }, [path]);

    return (
        <div
            className="text-black font-semibold text-6xl flex gap-x-2 items-center hover:cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => {
                push(href);
                setOpen(false);
            }}
        >
            <Icon className="w-12 h-12" />
            <div>{title}</div>
            {isCurrentPage && <IconArrowLeft className={"animate-slide-left ml-8 w-10 h-10"} />}
        </div>
    );
}
