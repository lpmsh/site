import {Header} from "@/components/Nav/Header";

export default function NavGroupLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-bg">
            <div className="px-12">
                <Header />
            </div>
            {children}
        </div>
    );
}
