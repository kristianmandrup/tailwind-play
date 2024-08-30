import React from "react";

interface ResponsiveTextProps {
  children: React.ReactNode;
  size?: "tiny" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  responsive?: boolean; // Optional prop to make text size responsive
  className?: string; // Additional classes
  as?: "span" | "div"; // Determines which element to render
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  children,
  size = "md",
  responsive = true,
  className = "",
  as = "span", // Default to "span"
}) => {
  // Define responsive size classes
  const sizeClassesSm = {
    tiny: responsive ? "text-tiny md:text-sm" : "text-tiny",
    sm: responsive ? "text-sm md:text-base" : "text-sm",
    md: responsive ? "text-base md:text-lg" : "text-base",
  };

  const sizeClasses = {
    tiny: responsive ? "text-tiny md:text-sm lg:text-base" : "text-tiny",
    sm: responsive ? "text-sm md:text-base lg:text-lg" : "text-sm",
    md: responsive ? "text-base md:text-lg lg:text-xl" : "text-base",
    lg: responsive ? "text-lg md:text-xl lg:text-2xl" : "text-lg",
    xl: responsive ? "text-xl md:text-2xl lg:text-3xl" : "text-xl",
    "2xl": responsive ? "text-2xl md:text-3xl lg:text-4xl" : "text-2xl",
    "3xl": responsive ? "text-3xl md:text-4xl lg:text-5xl" : "text-3xl",
  };

  // Determine the class to use based on size
  const textSizeClass = sizeClasses[size];

  // Render as either "span" or "div"
  const Component = as; // Assign the "as" prop to the component type

  return (
    <Component className={`${textSizeClass} ${className}`}>
      {children}
    </Component>
  );
};

export default ResponsiveText;
