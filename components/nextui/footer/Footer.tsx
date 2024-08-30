import React from "react";
import CompanySection from "./CompanySection";
import ResourcesSection from "./ResourcesSection";
import FollowUsSection from "./FollowUsSection";
import ContactSection from "./ContactSection";
import FooterText from "./FooterText";
import { Grid, GridContainer } from "../Grid";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white py-8 rounded-t-lg shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-50 pointer-events-none" />
      <GridContainer className="flex flex-col items-center relative z-10">
        <Grid columns={2} className="md:grid-cols-4 gap-8">
          <CompanySection />
          <ResourcesSection />
          <FollowUsSection />
          <ContactSection />
        </Grid>
        <FooterText className="mt-8 text-center">
          © 2024 Kanowas App. All rights reserved.
        </FooterText>
      </GridContainer>
    </footer>
  );
};

export default Footer;
