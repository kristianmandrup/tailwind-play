import React from "react";
import { US, DO } from "country-flag-icons/react/3x2";
import { useTheme } from "next-themes";
import LanguageSelector from "./LangSelector";
import NotificationBell from "@/components/nextui/NotificationBell";
import ThemeSelector from "./ThemeSelector";
import UserMenu from "./UserMenu";

const languageOptions = {
  en: { title: "English", icon: US },
  es: { title: "Español", icon: DO },
};

type UserMenuProps = {
  lang?: string;
  onLanguageChange: (lang: string) => void;
  onLogin: () => void;
  onLogout: () => void;
};

export const TopbarUserSession: React.FC<UserMenuProps> = ({
  lang,
  onLanguageChange,
}) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-4">
      <LanguageSelector
        languageOptions={languageOptions}
        lang={lang || "es"}
        onLanguageChange={onLanguageChange}
      />

      <ThemeSelector resolvedTheme={resolvedTheme} setTheme={setTheme} />
      <NotificationBell />
      <UserMenu />
    </div>
  );
};
