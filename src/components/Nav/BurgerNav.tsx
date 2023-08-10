"use client";

import * as React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { IconX, IconMenu2 } from "@tabler/icons-react";
import { navLinks, navSocials, NavSocialComponent } from "./NavConfig";

function BurgerNav() {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className="inline md:hidden">
            <div className="flex ">
                <button
                    type="button"
                    className=" inline-flex items-center justify-center rounded-md text-white"
                    onClick={() => setOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <IconMenu2
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                    />
                </button>
            </div>
            <Dialog as="div" className="font-dot" open={open} onClose={setOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-plant px-7  sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between px-5 py-4">
                        <a href="#" className="-m-1.5 p-1.5 outline-none">
                            <span className="sr-only">LPM</span>
                            <a
                                href="/"
                                className="text-6xl font-black outline-none border-none"
                            >
                                LPM
                            </a>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white"
                            onClick={() => setOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <IconX className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 px-2 flow-root">
                        <div className="-my-6 divide-y divide-white-700 ">
                            <div className="space-y-2 py-2 text-xl font-bold flex flex-col">
                                {navLinks.map((link, index) => (
                                    <a
                                        className={`text-slate-200 hover:text-slate-300 hover:cursor-pointer hover:bg-white hover:bg-opacity-[.15] rounded-xl p-3`}
                                        href={link.href}
                                        key={index}
                                    >
                                        {link.title}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <div className="flex justify-center items-center gap-x-4">
                                    {navSocials.map((social, index) => (
                                        <NavSocialComponent
                                            {...social}
                                            big
                                            key={index}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>
    );
}

export default BurgerNav;
