import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import {
  IconChartColumn,
  IconChartInfographic,
  IconChevronDown,
  IconShoppingCart,
} from "@tabler/icons-react";
import kanowaLogo from "@/resources/images/logos/kanowa-lion-white.png";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";
import { Montserrat } from "next/font/google";
import { useSidebar } from "@/components/contexts/SidebarContext";
import clsx from "clsx";
import ResponsiveText from "@/components/nextui/ResponsiveText";

const montserrat = Montserrat({ subsets: ["latin"] });

export const MidSection = () => {
  return (
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <Dropdown>
        <NavbarItem>
          <DropdownTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent border-none font-bold text-base lg:text-lg xl:text-xl"
              endContent={<IconChevronDown />}
              radius="sm"
              variant="light"
            >
              Features
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu
          aria-label="ACME features"
          className="w-[340px]"
          itemClasses={{
            base: "gap-4",
          }}
        >
          <DropdownItem
            key="autoscaling"
            description="ACME scales apps to meet user demand, automagically, based on load."
            startContent={<IconChartInfographic />}
          >
            <ResponsiveText>Dashboard</ResponsiveText>
          </DropdownItem>
          <DropdownItem
            key="usage_metrics"
            description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
            startContent={<IconChartColumn />}
          >
            <ResponsiveText>Usage Metrics</ResponsiveText>
          </DropdownItem>
          <DropdownItem
            key="production_ready"
            description="ACME runs on ACME, join us and others serving requests at web"
            startContent={<IconShoppingCart />}
          >
            <ResponsiveText>Buy plan</ResponsiveText>
            {/* <ResponsiveText as="div" size="tiny">
              ACME runs on ACME, join us and others serving requests at web
              scale.
            </ResponsiveText> */}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavbarItem isActive>
        <Link href="#" aria-current="page">
          <ResponsiveText>Customers</ResponsiveText>
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          <ResponsiveText>Integrations</ResponsiveText>
        </Link>
      </NavbarItem>
    </NavbarContent>
  );
};

export const RightSection = () => {
  return (
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link href="#">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="#" variant="flat">
          <Link href="/colony/register">Sign up</Link>
        </Button>
      </NavbarItem>
    </NavbarContent>
  );
};

const TopUserAvatar: React.FC = () => (
  <Dropdown placement="bottom-end">
    <DropdownTrigger>
      <Avatar
        isBordered
        as="button"
        className="transition-transform hover:scale-105"
        color="secondary"
        name="Jason Hughes"
        size="sm"
        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
      />
    </DropdownTrigger>
    <DropdownMenu aria-label="Profile Actions" variant="flat">
      <DropdownItem key="settings">My Settings</DropdownItem>
      <DropdownItem key="team_settings">Team Settings</DropdownItem>
      <DropdownItem key="analytics">Analytics</DropdownItem>
      <DropdownItem key="system">System</DropdownItem>
      <DropdownItem key="configurations">Configurations</DropdownItem>
      <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
      <DropdownItem key="logout" color="danger">
        Log Out
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
);

const RightSectionAvatar: React.FC = () => {
  return (
    <NavbarContent as="div" justify="end">
      <NavbarItem>
        <TopUserAvatar />
      </NavbarItem>
    </NavbarContent>
  );
};

export const LeftSection = () => {
  return (
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
      </Link>
      <p className="ml-4 text-2xl font-bold">Kanowa</p>
    </NavbarBrand>
  );
};

export default function Topbar() {
  const { isSidebarOpen } = useSidebar();

  return (
    <Navbar
      maxWidth="2xl"
      isBordered
      className={clsx(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-in-out",
        isSidebarOpen
          ? "ml-64 md:ml-64" // Adjust margin for small and medium devices
          : "ml-16 md:ml-16" // Adjust margin for small and medium devices
      )}
    >
      <LeftSection />
      <MidSection />
      <RightSectionAvatar />
    </Navbar>
  );
}
