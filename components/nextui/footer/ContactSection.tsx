// components/ContactSection.tsx
import React from "react";
import { Subheader } from "../Text";
import FooterText from "./FooterText";

const ContactSection: React.FC = () => (
  <div>
    <Subheader className="mb-4">Contact</Subheader>
    <FooterText>1234 Street Name</FooterText>
    <FooterText>City, State, 12345</FooterText>
    <FooterText>info@example.com</FooterText>
    <FooterText>(123) 456-7890</FooterText>
  </div>
);

export default ContactSection;
