// components/AppTopbar.tsx
import React, { useState } from "react";
import { Navbar } from "@nextui-org/react";
import { TopbarBrandSection } from "./TopbarBrandSection";
import { TopbarTitleSection } from "./TopbarTitleSection";
import { TopbarUserSession } from "./TopbarUserSession";
import clsx from "clsx";

type AppTopbarProps = {
  isMenuOpen?: boolean;
  isSidebarOpen?: boolean;
  onMenuToggle: () => void;
  lang?: string;
  onLanguageChange: (lang: string) => void;
  onLogin: () => void;
  onLogout: () => void;
};

export const AppTopbar: React.FC<AppTopbarProps> = ({
  isMenuOpen,
  isSidebarOpen,
  onMenuToggle,
  onLanguageChange,
  lang,
  onLogin,
  onLogout,
}) => {
  isMenuOpen = isMenuOpen ?? true;
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={onMenuToggle}
      className={clsx(
        "fixed top-0 left-0 w-full z-40 transition-transform duration-300",
        {
          "ml-64": isSidebarOpen, // Adjust margin-left when sidebar is open
          "ml-0": !isSidebarOpen, // No margin when sidebar is closed
        }
      )}
    >
      <TopbarBrandSection />
      <TopbarTitleSection title="Kanowas" />
      <TopbarUserSession
        onLanguageChange={onLanguageChange}
        lang={lang}
        onLogin={onLogin}
        onLogout={onLogout}
      />
    </Navbar>
  );
};

export default AppTopbar;
