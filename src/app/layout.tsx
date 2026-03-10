import "./globals.css";
import { Noto_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { Header } from "@/components/Nav/Header";
import { NavigationProvider } from "@/components/Nav/NavigationProvider";
import clsx from "clsx";
import { Metadata } from "next";
import localFont from "next/font/local";

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

const jbMono = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`bg-red-500`} lang="en">
      <body className={clsx(jbMono.className, "text-black ")}>
        <NavigationProvider>{children}</NavigationProvider>
        <Analytics />
      </body>
    </html>
  );
}
