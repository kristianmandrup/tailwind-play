import React from "react";
import { NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";
import kanowaLogo from "@/resources/images/logos/kanowa-logo-lion.png";
import { useTopbarMenu } from "@/components/contexts/TopbarMenuContext";
import { IconMenu2 } from "@tabler/icons-react";

type TopbarBrandSectionProps = {
  onMenuToggle?: () => void;
};

export const TopbarBrandSection: React.FC<TopbarBrandSectionProps> = ({
  onMenuToggle,
}) => {
  const { toggleMenu } = useTopbarMenu();

  onMenuToggle = onMenuToggle ?? toggleMenu;

  return (
    <NavbarContent justify="start">
      <NavbarItem>
        <Button onClick={toggleMenu} className="sm:hidden">
          <IconMenu2 />
        </Button>
      </NavbarItem>
      <NavbarItem>
        <Link href="/" className="flex items-center">
          <Image
            as={NextImage}
            src={kanowaLogo.src}
            alt="Kanowas Logo"
            width={64}
            height={64}
            className=""
          />
          <span className="ml-2 font-bold text-inherit">KANOWAS</span>
        </Link>
      </NavbarItem>
    </NavbarContent>
  );
};
