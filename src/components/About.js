import React from 'react';
import styled from 'styled-components';

const BioContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  position: relative;
  display:grid;
  /* margin-top: 10%; */

  display: grid;
  @media(max-width: 380px) {
    min-height: 120vh;
  }
   /*@media(max-width: 361px) {
    margin-top: 40%;
  }
  @media(max-width: 321px) {
    margin-top: 60%;
  } */
`;

const BioBox = styled.div`
  position: absolute;
  width: 90%;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  display: flex;
  overflow: hidden;

  @media(max-width: 1120px) {
    display: block;
    text-align: center;
    top: 15%;
    margin-top: 10%;
    transform: translate(-50%, -20%);
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
    margin-left: 50%;
  }
`;
const Bio = styled.div`
  margin: 30px;

   p{ 
    text-align: justify;
    font-size: 20px;
  }

  @media(max-width: 1120px) {
    p{ 
      text-align: center;
    }
  }
`;

const About = () => {
  return (
    <BioContainer id="about">
      <BioBox>
        <Heading>
          <h2>A bit about me</h2>
          <Dash />
        </Heading>
        <Bio>
          <p>
          Errr... it is always very hard to describe one’s self even though i’ve known me all my life. Here goes something hopefully.<br/>
          <br/>
          Divine Ogbe is a graduate of Electrical and Electronics Engineering(M.Eng). I am a full-stack software engineer. What drives my work ethic is building products that are user-centered, expecting to see a real impact from the works that I take on. I enjoy approaching code from a different point of view considering a great user interface as well as seamless functionality.<br/>
          <br/>
          Beside programing I’m interested in movies, football, and reading.<br/>
          <br/>
          I am also very interested in discussions on AI in XR and how much it would change our perception in the future. <br/>
          <br/>
              
          Welcome to my life. :D
          </p>
        </Bio>
      
      </BioBox>
    </BioContainer>
  );
};

export default About;