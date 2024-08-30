import React from "react";
import clsx from "clsx";

type TopbarProps = {
  leftContent?: React.ReactNode;
  centerContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
};

export const Topbar: React.FC<TopbarProps> = ({
  leftContent,
  centerContent,
  rightContent,
  className,
}) => {
  return (
    <div
      className={clsx(
        "w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4 shadow-md",
        className
      )}
    >
      <div className="flex items-center">{leftContent}</div>
      <div className="flex items-center justify-center flex-grow">
        {centerContent}
      </div>
      <div className="flex items-center">{rightContent}</div>
    </div>
  );
};
