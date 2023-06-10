import * as React from "react";
import {
    IconBrandTwitter,
    IconBrandGithub,
    IconBrandInstagram,
} from "@tabler/icons-react";
import BurgerNav from "./BurgerNav";
import { navSocials, navLinks, NavSocialComponent } from "./NavConfig";

function Nav() {
    return (
        <div className=" flex w-full justify-between items-center gap-x-12 self-start  py-4 ">
            <a href="/" className="text-6xl font-black">
                LPM
            </a>
            <div className="hidden justify-between items-center gap-x-4 text-xl font-bold  md:flex">
                {navLinks.map((link, index) => (
                    <a
                        className={`text-slate-200 hover:text-slate-300 hover:cursor-pointer `}
                        href={link.href}
                        key={index}
                    >
                        {link.title}
                    </a>
                ))}
        
            </div>
            <div className="hidden md:flex items-center gap-x-4">
                {navSocials.map((social, index) => (
                    <NavSocialComponent {...social} big={false} key={index} />
                ))}
            </div>
            <BurgerNav />
        </div>
    );
}

export default Nav;
