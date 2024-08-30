// components/Text.tsx
import React from 'react';
import clsx from 'clsx';

type TextProps = {
  children: React.ReactNode;
  variant?: 'heading' | 'subheading' | 'body';
  className?: string;
};

export const Header: React.FC<TextProps> = ({ children, className }) => (
  <h1 className={clsx('text-4xl font-bold text-gray-900 dark:text-gray-100', className)}>
    {children}
  </h1>
);

export const Subheader: React.FC<TextProps> = ({ children, className }) => (
  <h2 className={clsx('text-2xl font-semibold text-gray-900 dark:text-gray-100', className)}>
    {children}
  </h2>
);

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  className,
}) => {
  const baseClass = 'text-gray-900 dark:text-gray-100';

  const variantClass = {
    heading: 'text-3xl font-bold',
    subheading: 'text-xl font-semibold',
    body: 'text-base',
  }[variant];

  return <p className={clsx(baseClass, variantClass, className)}>{children}</p>;
};
