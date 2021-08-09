import React from 'react';
import styled from 'styled-components';
import Bounce from 'react-reveal/Bounce';

const ContactContainer = styled.div`
  min-height: 40vh;
  padding-top: 40px;
  align-items: center;
  display: grid;

   @media (max-width: 700){
    min-height: 50vh;
  }

  /*@media(max-width: 380px) {
    margin-top: 40%;
  }
  @media(max-width: 361px) {
    margin-top: 50%;
  }

  @media(max-width: 321px) {
    margin-top: 100%;
  } */
`;
const TextBox = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px;
  p{
    font-size: 20px;
  }

  h2{
    color: #fed330;
    padding-top: 10px;
    cursor: pointer;
  }
`;
const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <TextBox>
        <p>Do you have a project you want to talk about?<br/> The more Colossal the better. </p>
      <Anchor href="mailto:divineogbe@gmail.com">
      <Bounce bottom cascade>
        <h2>Say HI!</h2>
      </Bounce>
      </Anchor>
      </TextBox>
    </ContactContainer>
  );
};

export default Contact;