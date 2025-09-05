"use client";

// import * as React from "react";
// import { IconMenu2, IconX } from "@tabler/icons-react";
// import { navLinks } from "./NavConfig";
// import { useNavDrawer } from "./NavDrawer";

// export function Header() {
//     const { open, setOpen } = useNavDrawer();
//     return (
//         <div className={` flex w-full justify-between items-center gap-x-12 self-start  py-4 font-dot`}>
//             <a href="/" className="text-6xl font-black">
//                 LPM
//             </a>

//             <div className=" bg-bg">
//                 <div className="flex ">
//                     <button type="button" className=" inline-flex items-center justify-center rounded-md text-white" onClick={() => setOpen(!open)}>
//                         <span className="sr-only">Open main menu</span>
//                         {open ? (
//                             <IconX className="h-6 w-6 text-white" aria-hidden="true" />
//                         ) : (
//                             <IconMenu2 className="h-6 w-6 text-white" aria-hidden="true" />
//                         )}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

import { useState } from "react";
import { motion } from "motion/react";
import { IconArrowRight, IconForms, IconPlus } from "@tabler/icons-react";
import SocialLinks from "./SocialLinks";

const navconfig: Array<{ title: string; href: string }> = [
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },

    { title: "Photos", href: "/photos" },
    { title: "Gear", href: "/gear" },
];

export function Header() {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex justify-center text-neutral-100 w-full">
            <motion.div
                initial={false}
                animate={{
                    height: open ? "auto" : 56,
                    // transition: {
                    //   height: {
                    //     duration: 0.2,
                    //   },
                    // },
                }}
                className="w-full transform-none backdrop-blur-[36px] b-[#f0f0f052] bg-neutral-800 shadow-[2px_4px_20px_#0000000a] overflow-hidden  z-10 my-0 rounded-2xl top-4 nav"
            >
                <div className="flex justify-between items-center cursor-pointer">
                    <a href="/" className=" px-4 text-3xl text-white font-black py-4" style={{ lineHeight: 0 }}>
                        LPM
                    </a>
                    <button onClick={() => setOpen(!open)} className="w-full py-4 px-4 flex justify-end">
                        <motion.div
                            animate={{
                                rotate: open ? 45 : 0,
                            }}
                            className="text-neutral-400 w-fit"
                            style={{ transform: "none" }}
                        >
                            <IconPlus />
                        </motion.div>
                    </button>
                </div>

                <div className="border-t border-t-neutral-700">
                    <div className="px-4 pt-2 pb-4 flex md:flex-row flex-col justify-between">
                        <div className="flex flex-col gap-y-2 pt-[6px]">
                            {navconfig.map((child) => (
                                <a href={child.href} className="text-lg">
                                    {child.title}
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-col w-fit justify-end md:pt-0 pt-6">
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
