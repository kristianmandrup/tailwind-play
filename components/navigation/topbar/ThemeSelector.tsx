import React from "react";
import { Switch } from "@nextui-org/react";
import { IconSun, IconMoon } from "@tabler/icons-react";

type ThemeSelectorProps = {
  resolvedTheme?: string;
  setTheme: (theme: "light" | "dark") => void;
};

const isValidTheme = (resolvedTheme?: string) =>
  !resolvedTheme || ["light", "dark"].includes(resolvedTheme);

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  resolvedTheme,
  setTheme,
}) => {
  if (!isValidTheme) {
    throw new Error(
      `Invalid resolvedTheme: ${resolvedTheme} must be "light" or "dark"`
    );
  }

  return (
    <Switch
      size="lg"
      color="success"
      isSelected={resolvedTheme === "dark"}
      onChange={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      startContent={<IconSun size={20} />}
      endContent={<IconMoon size={20} />}
      aria-label="Theme toggle"
    />
  );
};

export default ThemeSelector;
