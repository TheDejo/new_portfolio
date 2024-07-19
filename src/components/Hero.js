import React from "react";
import Dimoji from "../images/Dimoji.png";
import { Button } from "./myButton";
import styled from "styled-components";
import { HiOutlineArrowDown } from "react-icons/hi";
import Bounce from "react-reveal/Bounce";

const HeroContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextBox = styled.div`
  text-align: justify;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const ImageContainer = styled.div`
  img {
    height: 300px;
    margin-right: 40px;
    animation-name: moveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-out;
  }

  @media (max-width: 940px) {
    img {
      margin-right: 0px;
    }
  }
`;

const Text = styled.div`
  h1 {
    font-size: 90px;
    font-weight: 700;
    letter-spacing: 3px;
  }

  p {
    font-size: 20px;
    font-weight: 600;
    color: #fed330;
  }

  h3 {
    margin-top: 10px;
    font-size: 10px;
    font-weight: 400;
  }

  @media (max-width: 680px) {
    h1 {
      font-size: 40px;
      letter-spacing: 2px;
    }

    br {
      display: none;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;

  @media (max-width: 940px) {
    justify-content: center;
    margin-left: 20px;
  }
`;

const Arrow = styled(HiOutlineArrowDown)`
  font-size: 40px;
  transform: translate(-25%, -25%);
`;

const Hero = () => {
  return (
    <HeroContainer>
      <TextBox>
        <Bounce bottom cascade>
          {/* <ImageContainer>
            <img alt="dimoji" src={Dimoji} />
          </ImageContainer> */}

          <Text>
            <h1>
              Divine Ogbe
            </h1>
            <p>Software Engineer</p>
            {/* <ButtonContainer>
              <Button to="projects" smooth={true} duration={1000}>
                <Arrow />
              </Button>
            </ButtonContainer> */}
          </Text>
        </Bounce>
      </TextBox>
    </HeroContainer>
  );
};

export default Hero;
