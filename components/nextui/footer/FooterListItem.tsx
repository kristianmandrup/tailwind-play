import React from "react";
import clsx from "clsx";
import FooterText from "./FooterText";
import FooterLink from "./FooterLink";

type FooterListItemProps = {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
};

const FooterListItem: React.FC<FooterListItemProps> = ({
  href,
  children,
  ariaLabel,
  className,
}) => (
  <li className={clsx(className)}>
    <FooterLink href={href} ariaLabel={ariaLabel}>
      <FooterText>{children}</FooterText>
    </FooterLink>
  </li>
);

export default FooterListItem;
