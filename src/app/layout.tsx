import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import localFont from "next/font/local";
import { Header } from "@/components/Nav/Header";
import clsx from "clsx";
import { Metadata } from "next";

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

const jbMono = JetBrains_Mono({
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
