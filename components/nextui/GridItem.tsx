import React from 'react';
import clsx from 'clsx';

type GridItemProps = {
  children: React.ReactNode;
  className?: string;
};

export const GridItem: React.FC<GridItemProps> = ({ children, className }) => {
  return <div className={clsx('p-4', className)}>{children}</div>;
};
