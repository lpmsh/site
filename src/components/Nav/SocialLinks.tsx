import { GitHubLogoIcon, LinkedInLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function SocialLinks() {
  const iconClass = "w-4 h-4";

  return (
    <div className="flex items-center gap-x-3 w-fit">
      <a className="text-neutral-300 transition hover:text-neutral-500" href="https://github.com/lpmsh" target="_blank">
        <GitHubLogoIcon className={iconClass} />
      </a>
      <a className="text-neutral-300 transition hover:text-neutral-500" href="https://www.linkedin.com/in/liampmonaghan/" target="_blank">
        <LinkedInLogoIcon className={iconClass} />
      </a>
      <a className="text-neutral-300 transition hover:text-neutral-500" href="https://instagram.com/lpm_visuals" target="_blank">
        <InstagramLogoIcon className={iconClass} />
      </a>
      <a className="text-neutral-300 transition hover:text-neutral-500" href="https://twitter.com/lmon_25" target="_blank">
        <TwitterLogoIcon className={iconClass} />
      </a>
    </div>
  );
}
