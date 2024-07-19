import React from 'react';
import styled from 'styled-components';

const BioContainer = styled.div`
  min-height: 50vh;
  width: 100%;
  /* position: relative; */
  /* display:grid; */
  padding: 0 10%;

  /* display: grid; */
  @media(max-width: 380px) {
    /* min-height: 120vh; */
  }
   /*@media(max-width: 361px) {
    margin-top: 40%;
  }
  @media(max-width: 321px) {
    margin-top: 60%;
  } */
`;

const BioBox = styled.div`
  /* position: absolute; */
  /* width: 90%;
  top: 30%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  align-items: center;
  justify-content: center;
  display: flex;
  overflow: hidden;

  @media(max-width: 1120px) {
    /* display: block; */
    /* text-align: center; */
    /* top: 15%;
    margin-top: 10%; */
    /* transform: translate(-50%, -20%); */
  }
`;
const Heading = styled.div`
  margin-right: 100px;

  h2{
    font-size: 40px; 
    font-weight: 700; 
    margin-bottom: 5px;
    padding-right: 30px;
  }

  @media(max-width: 1120px) {
    margin-right: 1px;
    display: block;

    h2{
      font-size: 30px; 
    }
  }
`;
const Dash = styled.div`
  min-height: 6px;
  width: 40px;
  background-color: #fed330;
  margin-bottom: 20px;

  @media(max-width: 1120px) {
    /* margin-left: 50%; */
  }
`;
const Bio = styled.div`
  margin: 30px;

   p{ 
    text-align: justify;
    font-size: 20px;
  }


`;

const About = () => {
  return (
    <BioContainer id="about">
      <BioBox>
        {/* <Heading>
          <h2>A bit about me</h2>
          <Dash />
        </Heading> */}
        <Bio>
          <p>
            My name is Divine, Been a software engineer for about 6 years.
            Over the course of my career, I have garnered substantial expertise in Javascript, Typescript, React, NodeJS. Currently, I hold the position of Senior Frontend Engineer at Motorway, where I have had the privilege to lead variety of challenging projects. What truly drives my work ethic is the desire to witness a tangible impact from the projects I undertake. I am committed to delivering high-quality, user-friendly products that not only provide value to the company but also create exceptional experiences for its customers.
          </p>
        </Bio>
      </BioBox>
    </BioContainer>
  );
};

export default About;