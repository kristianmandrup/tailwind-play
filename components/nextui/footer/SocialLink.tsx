import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import FooterLink from "./FooterLink";

type SocialLinkProps = {
  type: "Facebook" | "Twitter" | "LinkedIn";
  href: string;
  ariaLabel: string;
};

const iconMap = {
  Facebook: IconBrandFacebook,
  Twitter: IconBrandTwitter,
  LinkedIn: IconBrandLinkedin,
};

const SocialLink: React.FC<SocialLinkProps> = ({ type, href, ariaLabel }) => {
  const IconComponent = iconMap[type];
  return (
    <FooterLink href={href} ariaLabel={ariaLabel}>
      <IconComponent size={24} />
    </FooterLink>
  );
};

export default SocialLink;
