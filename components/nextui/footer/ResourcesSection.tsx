import React from "react";
import { Subheader } from "../Text"; // Adjust the path as needed
import FooterList from "./FooterList"; // Adjust the path as needed

const resources = [
  { label: "Blog", href: "#" },
  { label: "Help Center", href: "#" },
  { label: "Documentation", href: "#" },
  { label: "API Reference", href: "#" },
];

const ResourcesSection: React.FC = () => (
  <div>
    <Subheader className="mb-4">Resources</Subheader>
    <FooterList items={resources} />
  </div>
);

export default ResourcesSection;
