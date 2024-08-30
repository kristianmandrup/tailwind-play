import React from "react";
import { NavbarContent, NavbarBrand, Link } from "@nextui-org/react";

type TopbarTitleSectionProps = {
  title?: string;
};

export const TopbarTitleSection: React.FC<TopbarTitleSectionProps> = ({
  title = "Kanowas",
}) => {
  return (
    <NavbarContent justify="center">
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">
          {title}
        </Link>
      </NavbarBrand>
    </NavbarContent>
  );
};
