// components/Sidebar.tsx
import React from "react";
import clsx from "clsx";
import { IconChevronRight, IconX } from "@tabler/icons-react";
import { useSidebar } from "../contexts/SidebarContext";

type SidebarProps = {
  isOpen?: boolean;
  onToggleSidebar?: () => void;
  className?: string;
  children: React.ReactNode;
};

type SidebarToggleBtnProps = {
  className?: string;
};

export const SidebarToggleBtn: React.FC<SidebarToggleBtnProps> = ({
  className,
}: SidebarToggleBtnProps) => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const isClosed = !isSidebarOpen;
  return (
    <button
      onClick={toggleSidebar}
      className={clsx(
        "absolute top-4 right-4 text-gray-400 hover:text-white transition-transform duration-300",
        {
          "translate-x-0": isClosed,
          "-translate-x-full": isSidebarOpen, // Move the button into view when sidebar is closed
        },
        className
      )}
    >
      {isSidebarOpen ? <IconX size={24} /> : <IconChevronRight size={24} />}
    </button>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ className, children }) => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const isSidebarClosed = !isSidebarOpen;
  return (
    <>
      <div
        className={clsx(
          "fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg transition-transform duration-300 z-50",
          {
            "translate-x-0": isSidebarOpen,
            "-translate-x-48": isSidebarClosed,
          },
          // { "pl-16": isClosed },
          className
        )}
      >
        <SidebarToggleBtn />

        <nav className="mt-16">{children}</nav>
      </div>
    </>
  );
};
