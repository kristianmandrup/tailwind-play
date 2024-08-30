// components/Hero.tsx
import React from 'react';
import clsx from 'clsx';
import { Button } from '@nextui-org/react';

type HeroProps = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
  callToAction?: React.ReactNode;
};

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  className,
  callToAction,
}) => {
  return (
    <div
      className={clsx(
        'relative flex flex-col items-center justify-center h-96 bg-cover bg-center text-white',
        className
      )}
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        {subtitle && <p className="mt-4 text-xl">{subtitle}</p>}
        {callToAction}
      </div>
    </div>
  );
};
