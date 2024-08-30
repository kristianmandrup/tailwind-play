import React from "react";
import { Switch } from "@nextui-org/react";
import { US, DO } from "country-flag-icons/react/3x2";

type LanguageOption = {
  title: string;
};

type LanguageSelectorProps = {
  languageOptions: Record<string, LanguageOption>;
  lang: string;
  onLanguageChange: (lang: string) => void;
};

type CountryIcon = typeof US | typeof DO;
const langIconMap: Record<string, CountryIcon> = {
  en: US,
  es: DO,
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  languageOptions,
  lang,
  onLanguageChange,
}) => {
  const isEnglish = lang === "en";
  const SelectedIcon = isEnglish ? US : DO;
  const AlternateIcon = isEnglish ? DO : US;
  const alternateLang = isEnglish ? "es" : "en";

  return (
    <Switch
      size="lg"
      color="primary"
      isSelected={!isEnglish}
      onChange={() => onLanguageChange(alternateLang)}
      startContent={<US className="w-6 h-6" />}
      endContent={<DO className="w-6 h-6" />}
      aria-label="Language toggle"
    />
  );
};

export default LanguageSelector;
