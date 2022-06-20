import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .logo-image {
    width: 30px;
    object-fit: contain;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(132deg)
      brightness(103%) contrast(103%);
  }

  .logo-text {
    color: #fff;
    font-size: 18px;
    text-transform: capitalize;
    padding-left: 8px;
  }
`;

const Logo = () => {
  const router = useRouter();

  return (
    <LogoContainer onClick={() => router.push("/")}>
      <img className="logo-image" src="logo_no_bg.svg" alt="logo-image" />
      <div className="logo-text">Shil.me</div>
    </LogoContainer>
  );
};

export default Logo;
