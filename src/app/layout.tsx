import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "LPM",
    description: "LPM Portfolio Site",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className="bg-neutral-900" lang="en">
            <body className="font-sans text-slate-200">{children}</body>
        </html>
    );
}
