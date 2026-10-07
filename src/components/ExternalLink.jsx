import { ArrowUpRight } from "lucide-react";
export default function ExternalLink({
  href,
  children,
  className = "",
  ...props
}) {
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={`text-link ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}
