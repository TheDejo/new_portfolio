import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  min-height: 40vh;
  padding-top: 40px;

  @media (max-width: 700){
    padding-top: 20%;
  }

  @media(max-width: 380px) {
    margin-top: 40%;
  }
  @media(max-width: 361px) {
    margin-top: 50%;
  }

  @media(max-width: 321px) {
    margin-top: 100%;
  }
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
    <ContactContainer>
      <TextBox>
        <p>Do you have a project you want to talk about?<br/> The more Colossal the better. </p>
      <Anchor href="mailto:divineogbe@gmail.com">
        <h2>Say HI!</h2>
      </Anchor>
      </TextBox>
    </ContactContainer>
  );
};

export default Contact;