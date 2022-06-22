import styled from "styled-components";
import { SCREENS } from "../constants";

export const HomePageContainer = styled.div`
  padding: 0px;
  margin: 0px;
  z-index: -1;
  font-family: "Inter", sans-serif;
  height: 100%;
  overflow-x: hidden;
`;

export const HeroContainer = styled.div`
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );
  height: 100vh;

  .hero-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 25vh;
  }

  .hero-image-a4 {
    width: 25vw;
    object-fit: contain;
    position: absolute;
    left: 5%;
    top: 30%;

    animation: a4 1s;
    -moz-animation: a4 1s; /* Firefox */
    -webkit-animation: a4 1s; /* Safari and Chrome */
    @keyframes a4 {
      from {
        left: 10%;
        top: 35%;
      }
      to {
        left: 5%;
        top: 30%;
      }
    }

    @-moz-keyframes a4 {
      from {
        left: 10%;
        top: 35%;
      }
      to {
        left: 5%;
        top: 30%;
      }
    }
    @-webkit-keyframes a4 {
      from {
        left: 10%;
        top: 35%;
      }
      to {
        left: 5%;
        top: 30%;
      }
    }

    @media (min-width: ${SCREENS.lg}) {
      width: 20vw;
      object-fit: contain;
      position: absolute;
      left: 15%;
      top: 20%;

      animation: a4 1s;
      -moz-animation: a4 1s; /* Firefox */
      -webkit-animation: a4 1s; /* Safari and Chrome */
      @keyframes a4 {
        from {
          left: 20%;
        }
        to {
          left: 15%;
        }
      }

      @-moz-keyframes a4 {
        from {
          left: 20%;
        }
        to {
          left: 15%;
        }
      }
      @-webkit-keyframes a4 {
        from {
          left: 20%;
        }
        to {
          left: 15%;
        }
      }
    }
  }

  .hero-image-a6 {
    width: 15vw;
    object-fit: contain;
    position: absolute;
    left: 42%;
    top: 20%;

    animation: a6 1s;
    -moz-animation: a6 1s; /* Firefox */
    -webkit-animation: a6 1s; /* Safari and Chrome */
    @keyframes a6 {
      from {
        top: 25%;
      }
      to {
        top: 20%;
      }
    }

    @-moz-keyframes a6 {
      from {
        top: 25%;
      }
      to {
        top: 20%;
      }
    }
    @-webkit-keyframes a6 {
      from {
        top: 25%;
      }
      to {
        top: 20%;
      }
    }

    @media (min-width: ${SCREENS.lg}) {
      width: 8vw;
      object-fit: contain;
      position: absolute;
      left: 45%;
      top: 10%;

      animation: a6 1s;
      -moz-animation: a6 1s; /* Firefox */
      -webkit-animation: a6 1s; /* Safari and Chrome */
      @keyframes a6 {
        from {
          top: 15%;
        }
        to {
          top: 10%;
        }
      }

      @-moz-keyframes a6 {
        from {
          top: 15%;
        }
        to {
          top: 10%;
        }
      }
      @-webkit-keyframes a6 {
        from {
          top: 15%;
        }
        to {
          top: 10%;
        }
      }
    }
  }

  .hero-image-a1 {
    width: 18vw;
    object-fit: contain;
    position: absolute;
    right: 15%;
    top: 30%;

    animation: a1 1s;
    -moz-animation: a1 1s; /* Firefox */
    -webkit-animation: a1 1s; /* Safari and Chrome */
    @keyframes a1 {
      from {
        right: 20%;
        top: 35%;
      }
      to {
        right: 15%;
        top: 30%;
      }
    }

    @-moz-keyframes a1 {
      from {
        right: 20%;
        top: 35%;
      }
      to {
        right: 15%;
        top: 30%;
      }
    }
    @-webkit-keyframes a1 {
      from {
        right: 20%;
        top: 35%;
      }
      to {
        right: 15%;
        top: 30%;
      }
    }

    @media (min-width: ${SCREENS.lg}) {
      width: 12vw;
      object-fit: contain;
      position: absolute;
      right: 15%;
      top: 30%;

      animation: a1 1s;
      -moz-animation: a1 1s; /* Firefox */
      -webkit-animation: a1 1s; /* Safari and Chrome */
      @keyframes a1 {
        from {
          right: 20%;
        }
        to {
          right: 15%;
        }
      }

      @-moz-keyframes a1 {
        from {
          right: 20%;
        }
        to {
          right: 15%;
        }
      }
      @-webkit-keyframes a1 {
        from {
          right: 20%;
        }
        to {
          right: 15%;
        }
      }
    }
  }

  .hero-image-a2 {
    width: 20vw;
    object-fit: contain;
    position: absolute;
    left: 15%;
    top: 65%;

    animation: a2 1s;
    -moz-animation: a2 1s; /* Firefox */
    -webkit-animation: a2 1s; /* Safari and Chrome */
    @keyframes a2 {
      from {
        left: 20%;
        top: 60%;
      }
      to {
        left: 15%;
        top: 65%;
      }
    }

    @-moz-keyframes a2 {
      from {
        left: 20%;
        top: 60%;
      }
      to {
        left: 15%;
        top: 65%;
      }
    }
    @-webkit-keyframes a2 {
      from {
        left: 20%;
        top: 60%;
      }
      to {
        left: 15%;
        top: 65%;
      }
    }
  }

  .hero-image-a8 {
    width: 10vw;
    object-fit: contain;
    position: absolute;
    left: 45%;
    top: 75%;

    animation: a8 1s;
    -moz-animation: a8 1s; /* Firefox */
    -webkit-animation: a8 1s; /* Safari and Chrome */
    @keyframes a8 {
      from {
        top: 70%;
      }
      to {
        top: 75%;
      }
    }

    @-moz-keyframes a8 {
      from {
        top: 70%;
      }
      to {
        top: 75%;
      }
    }
    @-webkit-keyframes a8 {
      from {
        top: 70%;
      }
      to {
        top: 75%;
      }
    }
  }

  .hero-image-a5 {
    width: 12vw;
    object-fit: contain;
    position: absolute;
    right: 15%;
    top: 65%;

    animation: a5 1s;
    -moz-animation: a5 1s; /* Firefox */
    -webkit-animation: a5 1s; /* Safari and Chrome */
    @keyframes a5 {
      from {
        right: 20%;
        top: 60%;
      }
      to {
        right: 15%;
        top: 65%;
      }
    }

    @-moz-keyframes a5 {
      from {
        right: 20%;
        top: 60%;
      }
      to {
        right: 15%;
        top: 65%;
      }
    }
    @-webkit-keyframes a5 {
      from {
        right: 20%;
        top: 60%;
      }
      to {
        right: 15%;
        top: 65%;
      }
    }
  }

  .hero-logo {
    width: 96px;
    object-fit: contain;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(132deg)
      brightness(103%) contrast(103%);
    z-index: 99;
  }
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  z-index: 99;
`;

export const Description = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  font-family: "Inter", sans-serif;
  text-align: center;
  z-index: 99;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10vh 5%;

  @media (min-width: ${SCREENS.md}) {
    padding: 10vh;
  }

  @media (min-width: ${SCREENS.lg}) {
    padding: 5% 15%;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    padding: 5% 20%;
  }
`;

export const WhatIsShilMe = styled.div`
  color: #000;
  font-size: 18px;
  text-transform: uppercase;
`;

export const ShilMeDescription = styled.div`
  color: #000;
  font-size: 32px;
  line-height: 48px;

  @media (min-width: ${SCREENS.md}) {
    font-size: 42px;
    line-height: 64px;
  }
`;

export const TotalShilledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;
  padding: 10vh 0;

  @media (min-width: ${SCREENS.md}) {
    flex-direction: row;
    column-gap: 3rem;
    padding: 15vh 0%;
  }
`;

export const RoomAddressContainer = styled.div``;

export const AddressTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 8px;

  .auto-address-title {
    font-family: "DM Serif Text";
  }

  .eye-link {
    font-size: 24px;
  }
`;

export const AddressDescription = styled.div`
  color: #000;
  font-size: 20px;
  text-align: center;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 3vh;
  padding-bottom: 7vh;

  .input-address {
    height: 48px;
    border: none;
    background-color: rgba(41, 41, 42, 0.1);
    font-size: 24px;
    padding: 0px 32px;
    font-family: "Inter", sans-serif;
    font-weight: bold;
    border-radius: 8px;
    margin-right: 16px;
    width: 100%;

    @media (min-width: ${SCREENS.md}) {
      width: 80%;
    }

    @media (min-width: ${SCREENS.lg}) {
      width: 50%;
    }
  }

  .input-logo {
    width: 20px;
    object-fit: contain;
  }
`;

export const FeaturedShillersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 15vh;

  .shillers-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 16px;
    padding-top: 16px;
  }
`;
