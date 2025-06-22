import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import EmailIcon from "./icons/EmailIcon";

const links = [
  { href: "https://github.com/gothsec", Icon: GitHubIcon, label: "GitHub" },
  { href: "https://linkedin.com/in/hernandezoscar-dev", Icon: LinkedInIcon, label: "LinkedIn" },
  {
    href: "mailto:oscarandreshernandezpineda@gmail.com",
    Icon: EmailIcon,
    label: "Email",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-6 sm:space-x-8">
      {links.map(({ href, Icon, label }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          aria-label={label}
        >
          <Icon className="text-[var(--white-icon)] hover:text-[var(--white)] transition duration-300 ease-in-out" />
        </a>
      ))}
    </div>
  );
}
