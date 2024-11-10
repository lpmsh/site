import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: "/photos",
  },
  title: {
    default: "Photos | LPM",
    template: "%s | LPM",
  },
  description: "Liam Monaghan's Photo Gallery",
};

export default function PhotosLayout({ children }: { children: ReactNode }) {
  return children;
}
