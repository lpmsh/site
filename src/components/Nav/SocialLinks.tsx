import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

export default function SocialLinks() {
  const iconClass = "w-3.5 h-3.5";

  return (
    <div className="flex items-center gap-x-3 w-fit">
      <a className="text-neutral-300 transition hover:text-neutral-500" href="https://github.com/lpmsh" target="_blank">
        <Github className={iconClass} />
      </a>
      <a className="text-neutral-300 transition hover:text-neutral-500" href="https://www.linkedin.com/in/liampmonaghan/" target="_blank">
        <Linkedin className={iconClass} />
      </a>
      <a className="text-neutral-300 transition hover:text-neutral-500" href="https://instagram.com/lpm_visuals" target="_blank">
        <Instagram className={iconClass} />
      </a>
      <a className="text-neutral-300 transition hover:text-neutral-500" href="https://twitter.com/lmon_25" target="_blank">
        <Twitter className={iconClass} />
      </a>
      <a className="text-neutral-300 transition hover:text-neutral-500" href="https://substack.com/@lpmsh" target="_blank">
        <svg role="img" viewBox="0 0 24 24" className={iconClass} stroke="currentColor" strokeWidth="2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </div>
  );
}
