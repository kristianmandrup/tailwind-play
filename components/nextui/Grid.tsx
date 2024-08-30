// components/Grid.tsx
import React from 'react';
import clsx from 'clsx';

type GridProps = {
  children: React.ReactNode;
  className?: string;
  columns?: number;
};

export const Grid: React.FC<GridProps> = ({
  children,
  className,
  columns = 1,
}) => {
  return (
    <div className={clsx('grid gap-4', `grid-cols-${columns}`, className)}>
      {children}
    </div>
  );
};

export const GridContainer: React.FC<GridProps> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx('container mx-auto px-4', className)}>
      {children}
    </div>
  );
};