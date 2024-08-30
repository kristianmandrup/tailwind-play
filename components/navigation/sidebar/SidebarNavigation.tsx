// components/SidebarNavigation.tsx
import React from 'react';
import Link from 'next/link';
import { NavigationItem } from '@/data/navigation';

type SidebarNavigationProps = {
  items: NavigationItem[];
};

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ items }) => {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        item.visible !== false && (
          <li key={index} className="p-2 hover:bg-gray-700">
            {item.action ? (
              <button onClick={item.action} className="w-full text-left">{item.title}</button>
            ) : (
              <Link href={item.href} className="w-full block text-left">{item.title}</Link>
            )}
          </li>
        )
      ))}
    </ul>
  );
};
