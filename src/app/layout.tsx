import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import localFont from "next/font/local";
import { NavDrawerProvider } from "@/components/Nav/NavDrawer";

export const metadata = {
    title: "LPM",
    description: "LPM Portfolio Site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={`bg-bg`} lang="en">
            <body className="font-sans text-slate-200">
                <NavDrawerProvider>{children}</NavDrawerProvider>
                <Analytics />
            </body>
        </html>
    );
}
