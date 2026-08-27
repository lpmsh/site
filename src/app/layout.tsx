import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { Header } from "@/components/Nav/Header";
import { NavigationProvider } from "@/components/Nav/NavigationProvider";
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

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`bg-white`} lang="en">
      <body className={clsx(inter.className, "text-[#585858] text-sm")}>
        <NavigationProvider>{children}</NavigationProvider>
        <Analytics />
      </body>
    </html>
  );
}
