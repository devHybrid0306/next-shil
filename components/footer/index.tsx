import { useRouter } from "next/router";
import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

import { SCREENS } from "../../constants";
import NavbarItem from "../nav-bar-item";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  height: 300px;
  padding: 90px 5%;
  margin-top: 80px;
  cursor: pointer;

  @media (min-width: ${SCREENS.md}) {
    padding: 90px 15%;
  }

  .footer-logo {
    width: 80px;
    height: 80px;
    object-fit: contain;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(132deg)
      brightness(103%) contrast(103%);
  }
`;

const FooterItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10%;
`;

const Footer = () => {
  const router = useRouter();

  return (
    <FooterContainer>
      <img
        className="footer-logo"
        src="logo_no_bg.svg"
        alt="footer-logo"
        onClick={() => router.push("/")}
      />
      <FooterItemContainer>
        <NavbarItem
          text="Information"
          url="https://invincible-hearing-4f0.notion.site/Shil-me-8c7e38a1094743639173cd47bfe23f5d"
        />
        <NavbarItem
          text="Careers"
          url="https://shilme.notion.site/shilme/Shil-me-Careers-967cb84844064b8d8874654734074e8c"
        />
        <NavbarItem
          text="Privacy Policy"
          url="https://invincible-hearing-4f0.notion.site/Shil-me-Privacy-Policy-8c0e73dd67d54ae08a201ecd770f6371"
        />
        <NavbarItem
          text="Terms and Conditions"
          url="https://invincible-hearing-4f0.notion.site/Shil-me-Terms-of-Service-5ae7929d63704f0385c626283af9cac5"
        />
      </FooterItemContainer>
      <FooterItemContainer>
        <NavbarItem
          text="Twitter"
          icon={<FaTwitter color="#fff" />}
          url="https://twitter.com/ShilMeHQ"
        />
        <NavbarItem
          text="Discord"
          icon={<FaDiscord color="#fff" />}
          url="https://discord.gg/swpk7fWvm8"
        />
      </FooterItemContainer>
    </FooterContainer>
  );
};

export default Footer;
