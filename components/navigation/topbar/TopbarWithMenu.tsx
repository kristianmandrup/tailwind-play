import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useTopbarMenu } from "@/components/contexts/TopbarMenuContext";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";
import { Montserrat } from "next/font/google";
import kanowaLogo from "@/resources/images/logos/kanowa-lion-white.png";

const montserrat = Montserrat({ subsets: ["latin"] });

export const TopbarWithMenu: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useTopbarMenu();

  return (
    <Navbar maxWidth="2xl">
      <NavbarContent className="flex items-center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onClick={toggleMenu}
        />
        <NavbarBrand className={montserrat.className}>
          <Link href="/" className="flex items-center">
            <Image
              as={NextImage}
              src={kanowaLogo.src}
              alt="Kanowa's Logo"
              width={42}
              height={42}
              className="mr-2 rounded-full shadow-lg ring-4 ring-offset-2 ring-gray transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:ring-offset-4"
            />
            <p className="ml-4 text-2xl font-bold">Kanowa</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#">Features</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Integrations</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="#">Profile</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">Dashboard</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">Activity</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">Analytics</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">System</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">Deployments</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">My Settings</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">Team Settings</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">Help & Feedback</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">Log Out</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
