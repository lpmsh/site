"use client";

import * as React from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { navLinks } from "./NavConfig";
import { useNavDrawer } from "./NavDrawer";

export function Header() {
    const { open, setOpen } = useNavDrawer();
    return (
        <div className={` flex w-full justify-between items-center gap-x-12 self-start  py-4 font-dot`}>
            <a href="/" className="text-6xl font-black">
                LPM
            </a>

            <div className=" bg-bg">
                <div className="flex ">
                    <button type="button" className=" inline-flex items-center justify-center rounded-md text-white" onClick={() => setOpen(!open)}>
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <IconX className="h-6 w-6 text-white" aria-hidden="true" />
                        ) : (
                            <IconMenu2 className="h-6 w-6 text-white" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
