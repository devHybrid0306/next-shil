import React, { useState } from "react";
import { FaBars, FaDiscord, FaTwitter } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import styled from "styled-components";

import { SCREENS } from "../../constants";
import Logo from "../logo";
import NavbarItem from "./nav-bar-item";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 24px;
`;

const NavbarItems = styled.div`
  display: none;
  flex-direction: row;

  @media (min-width: ${SCREENS.md}) {
    display: flex;
  }
`;

const HamburgerButton = styled.div`
  padding: 8px 0px;
  display: block;

  @media (min-width: ${SCREENS.md}) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  position: absolute;
  background-color: #000;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  z-index: 999;

  .close-icon {
    padding: 16px 0px;
  }
`;

export default function Navbar() {
  const [isShowHamburger, setIsShowHamburger] = useState(false);

  const navbarItems = () => {
    return (
      <>
        <NavbarItem
          text="Information"
          url="https://invincible-hearing-4f0.notion.site/Shil-me-8c7e38a1094743639173cd47bfe23f5d"
        />
        <NavbarItem
          text="Careers"
          url="https://shilme.notion.site/shilme/Shil-me-Careers-967cb84844064b8d8874654734074e8c"
        />
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
        <NavbarItem
          text="Privacy"
          url="https://invincible-hearing-4f0.notion.site/Shil-me-Privacy-Policy-8c0e73dd67d54ae08a201ecd770f6371"
        />
        <NavbarItem
          text="Terms"
          url="https://invincible-hearing-4f0.notion.site/Shil-me-Terms-of-Service-5ae7929d63704f0385c626283af9cac5"
        />
      </>
    );
  };

  return (
    <NavbarContainer>
      <Logo />
      <HamburgerButton onClick={() => setIsShowHamburger(true)}>
        <FaBars color="#fff" />
      </HamburgerButton>
      {isShowHamburger ? (
        <HamburgerMenu>
          <div className="close-icon">
            <RiCloseFill
              color="#fff"
              size={32}
              onClick={() => setIsShowHamburger(false)}
            />
          </div>
          {navbarItems()}
        </HamburgerMenu>
      ) : null}
      <NavbarItems>{navbarItems()}</NavbarItems>
    </NavbarContainer>
  );
}
