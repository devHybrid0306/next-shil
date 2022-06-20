import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  padding: 10px 16px;
  cursor: pointer;
`;

const BannerText = styled.a`
  color: rgb(0, 161, 255);
  font-size: 14px;
  text-align: center;
  font-weight: bold;

  :hover {
    text-decoration: underline;
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BannerText
        target="_blank"
        href="https://mirror.xyz/0x6E5289561a35a3c91B77e99e4215Fa4583185cF3/lTQsfSTTLVU29ciJ0TqZHmGPseVzKaMaNSoGkF68OGM"
      >
        🎉 Shil.me closes $1.2M pre-seed - Backed by OpenSea Ventures, Folius
        Ventures, Zee Prime, and more...
      </BannerText>
    </BannerContainer>
  );
};

export default Banner;
