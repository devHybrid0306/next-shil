import React from "react";
import styled from "styled-components";

const NavbarItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
`;

const NavbarItemText = styled.a`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  padding-left: 8px;
  text-transform: capitalize;
`;

interface NavbarItemProps {
  icon?: React.ReactElement;
  text: string;
  url?: string;
}

const NavbarItem = ({ icon, text, url }: NavbarItemProps) => {
  return (
    <NavbarItemContainer>
      {icon}
      <NavbarItemText target="_blank" href={url}>
        {text}
      </NavbarItemText>
    </NavbarItemContainer>
  );
};

export default NavbarItem;
