import React from "react";
import styled from "styled-components";

const FooterItemContainer = styled.a`
  color: #fff;
  font-family: "Inter";
  padding: 8px;
`;

interface FooterItemProps {
  text: string;
  url?: string;
}

const FooterItem = ({ text, url }: FooterItemProps) => {
  return (
    <FooterItemContainer target="_blank" href={url}>
      {text}
    </FooterItemContainer>
  );
};

export default FooterItem;
