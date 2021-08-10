import React from "react";
import Dimoji from "../images/Dimoji.png";
import { Button } from "./myButton";
import styled from "styled-components";
import { HiOutlineArrowDown } from "react-icons/hi";
import Bounce from "react-reveal/Bounce";

const HeroContainer = styled.div`
  min-height: 100vh;
  position: relative;
  top: 65px;
  width: 100%;
  display: grid;
  align-items: center;
  margin-bottom: 10%;
`;
const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  text-align: justify;
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 0;

  @media (max-width: 940px) {
    display: block;
    text-align: center;
    top: 30%;
    transform: translate(-50%, -20%);
  }
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
    font-size: 60px;
    font-weight: 500;
    letter-spacing: 3px;
  }

  p {
    font-size: 20px;
    font-weight: 600;
    color: #2bcbba;
  }

  h3 {
    margin-top: 10px;
    font-size: 10px;
    font-weight: 400;
  }

  @media (max-width: 940px) {
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
          <ImageContainer>
            <img alt="dimoji" src={Dimoji} />
          </ImageContainer>

          <Text>
            <h1>
              Hello! <br /> Divine Here
            </h1>
            <p>Full-Stack Developer</p>
            <h3>Explore Projects</h3>
            <ButtonContainer>
              <Button to="projects" smooth={true} duration={1000}>
                <Arrow />
              </Button>
            </ButtonContainer>
          </Text>
        </Bounce>
      </TextBox>
    </HeroContainer>
  );
};

export default Hero;
