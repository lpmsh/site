import Nav from "@/components/Nav";


export default function NavGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div><div className="px-12"><Nav/></div>{children}</div>
  );
}
