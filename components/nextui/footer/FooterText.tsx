import React from "react";
import clsx from "clsx";
import { Text } from "../Text";

type FooterTextProps = {
  className?: string;
  children: React.ReactNode;
};

const FooterText: React.FC<FooterTextProps> = ({ children, className }) => (
  <Text
    className={clsx(
      "mb-2 text-sm sm:text-base md:text-lg lg:text-xl",
      className
    )}
  >
    {children}
  </Text>
);

export default FooterText;
