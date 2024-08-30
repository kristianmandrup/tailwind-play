import React from "react";
import FooterListItem from "./FooterListItem"; // Adjust the path as needed

type FooterListItemData = {
  label: string;
  href: string;
};

type FooterListProps = {
  items?: FooterListItemData[]; // Optional list of items with label and href
  children?: React.ReactNode; // Optional children to render if no items are provided
};

const FooterList: React.FC<FooterListProps> = ({ items, children }) => {
  return (
    <ul className="list-none p-0 m-0">
      {items ? (
        items.map((item, index) => (
          <FooterListItem key={index} href={item.href}>
            {item.label}
          </FooterListItem>
        ))
      ) : (
        <>{children}</>
      )}
    </ul>
  );
};

export default FooterList;
