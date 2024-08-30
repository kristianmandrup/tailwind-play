import React from "react";
import Link from "next/link";
import clsx from "clsx";

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
};

const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  children,
  ariaLabel,
  className,
}) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={clsx(
        "text-white hover:text-gray-400 transition-colors duration-200 no-underline",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default FooterLink;
