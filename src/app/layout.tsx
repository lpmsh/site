import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { Header } from "@/components/Nav/Header";
import clsx from "clsx";
import { Metadata } from "next";
import localFont from 'next/font/local'
 


export const metadata: Metadata = {
  metadataBase: new URL("https://lpm.sh"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "LPM",
    template: "%s | LPM",
  },
  description: "Student, Developer, and Photographer",
};

const jbMono = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`bg-white`} lang="en">
      <body className={clsx(jbMono.className, "text-black ")}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
