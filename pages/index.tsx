import type { NextPage } from "next";
import Image from "next/image";

import Banner from "../components/banner";
import Footer from "../components/footer";
import Navbar from "../components/nav-bar";
import SEO from "../components/seo";
import TotalShilledValue from "../components/total-shilled-value";
import {
  AddressContainer,
  AddressDescription,
  AddressTitle,
  Description,
  FeaturedShillersContainer,
  HeroContainer,
  HomePageContainer,
  MainContainer,
  RoomAddressContainer,
  ShilMeDescription,
  Title,
  TotalShilledContainer,
  WhatIsShilMe,
} from "./home.styles";

const HomePage: NextPage = () => {
  return (
    <HomePageContainer>
      <SEO
        title="Shil.me | Verify"
        description="Verify yourself with a Tweet."
        // favicon={Favicon}
        meta={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          },
          {
            name: "og:title",
            content: "Shil.me | Verify",
          },
          {
            name: "og:url",
            content: "https://shil.me/verify",
          },
          {
            name: "og:description",
            content: "Verify yourself with a Tweet.",
          },
        ]}
      />
      <HeroContainer>
        <Banner />
        <Navbar />
        <div className="hero-main">
          <img className="hero-logo" src="logo_no_bg.svg" alt="main-logo" />
          <Title>Join the great shilling</Title>
          <Description>
            Display and interact with your identity in Web3
          </Description>
          <img className="hero-image-a4" src="a4.png" alt="image-hero-a4" />
          <img className="hero-image-a6" src="a6.png" alt="image-hero-a6" />
          <img className="hero-image-a1" src="a1.png" alt="image-hero-a1" />
          <img className="hero-image-a2" src="a2.png" alt="image-hero-a2" />
          <img className="hero-image-a8" src="a8.png" alt="image-hero-a8" />
          <img className="hero-image-a5" src="a5.png" alt="image-hero-a5" />
        </div>
      </HeroContainer>
      <MainContainer>
        <WhatIsShilMe>What is shil.me?</WhatIsShilMe>
        <ShilMeDescription>
          Shil.me is the first link-in-bio NFT display platform that
          incentivizes meaningful interaction.
        </ShilMeDescription>
        <TotalShilledContainer>
          <TotalShilledValue title="Total Value Shilled" value={1.7} />
          <TotalShilledValue title="Total Value Shilled" value={2.3} />
          <TotalShilledValue title="Total Value Shilled" value={2.5} />
        </TotalShilledContainer>
        <RoomAddressContainer>
          <AddressTitle>
            <h1 className="auto-address-title">Auto-generate rooms </h1>
            <a className="eye-link" href={"#"}>
              👀
            </a>
          </AddressTitle>
          <AddressDescription>
            Put in any wallet address to see how they`d look on a Shil.me room
            in seconds
          </AddressDescription>
          <AddressContainer>
            <input
              className="input-address"
              placeholder="0x6E5289561a35a3c91B77e99e4215Fa4583185cF3"
            />
            <img className="input-logo" src="logo_no_bg.svg" alt="imput-logo" />
          </AddressContainer>
        </RoomAddressContainer>
        <FeaturedShillersContainer>
          <h1>Featured Shillers</h1>
          <div className="shillers-container">
            <Image src="/crit.png" width="270" height="270" alt="crit-image" />
            <Image src="/faer.png" width="270" height="270" alt="faer-image" />
            <Image src="/crit.png" width="270" height="270" alt="crit-image" />
            <Image src="/faer.png" width="270" height="270" alt="faer-image" />
          </div>
        </FeaturedShillersContainer>
        <img src="jaso-1.png" alt="image-jaso" />
      </MainContainer>
      <Footer />
    </HomePageContainer>
  );
};

export default HomePage;
