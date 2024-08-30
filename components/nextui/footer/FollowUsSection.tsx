// components/FollowUsSection.tsx
import React from "react";
import { Subheader } from "../Text";
import SocialLink from "./SocialLink";

const FollowUsSection: React.FC = () => (
  <div>
    <Subheader className="mb-4">Follow Us</Subheader>
    <div className="flex space-x-4">
      <SocialLink type="Facebook" href="#" ariaLabel="Facebook" />
      <SocialLink type="Twitter" href="#" ariaLabel="Twitter" />
      <SocialLink type="LinkedIn" href="#" ariaLabel="LinkedIn" />
    </div>
  </div>
);

export default FollowUsSection;
