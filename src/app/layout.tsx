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
            <body className={clsx(satoshi.className, "font-sans text-slate-200 mb-8 ")}>
                <div className="flex justify-center w-full">
                    <div className="md:max-w-[75%] lg:max-w-[65%] px-4 md:px-6 lg:px-12 w-full">
                        <div className="mt-6 mb-10">
                            <Header />
                        </div>
                        {children}
                        <Analytics />
                    </div>
                </div>
            </body>
        </html>
    );
}
