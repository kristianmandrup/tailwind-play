import React from "react";
import { Subheader } from "../Text"; // Adjust the path as needed
import FooterList from "./FooterList"; // Adjust the path as needed

const companyItems = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const CompanySection: React.FC = () => (
  <div>
    <Subheader className="mb-4">Company</Subheader>
    <FooterList items={companyItems} />
  </div>
);

export default CompanySection;
