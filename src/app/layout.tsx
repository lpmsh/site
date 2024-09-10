import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import localFont from "next/font/local";
import { Header } from "@/components/Nav/Header";
import clsx from "clsx";

export const metadata = {
    title: "LPM",
    description: "LPM Portfolio Site",
};

// Font files can be colocated inside of `app`
const satoshi = localFont({
    src: "../assets/satoshi.ttf",
    display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={`bg-bg`} lang="en">
            <body className={clsx(satoshi.className, "font-sans text-slate-200 ")}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
