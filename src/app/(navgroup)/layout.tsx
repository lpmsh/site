import Nav from "@/components/Nav/Nav";


export default function NavGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="bg-bg">
          <div className="px-12">
              <Nav />
          </div>
          {children}
      </div>
  );
}
