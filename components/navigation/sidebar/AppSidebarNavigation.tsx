import { mainMenuItems } from "@/data/navigation";
import React from "react";
import { SidebarNavigation } from "./SidebarNavigation";

type AppSidebarNavigationProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

export const AppSidebarNavigation: React.FC<AppSidebarNavigationProps> = ({
  isOpen = true,
  onClose,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ zIndex: 1000 }} // Ensure the sidebar is above other elements
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        ✕
      </button>
      <nav className="mt-8">
        <SidebarNavigation items={mainMenuItems} />
      </nav>
    </div>
  );
};
