import * as React from "react";

function A({ href, target, children }: { href: string; target?: string, children: React.ReactNode }) {
  return <a className="text-custom-500 hover:text-custom-600" href={href} target={target}>{children}</a>;
}

export default A;
