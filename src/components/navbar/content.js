import React from 'react';
import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {menuData} from '../../data/Menudata';


const Li = styled(LinkS)`
   padding: 12px 10px;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;

    &:hover{
      transition: 0.1s;
      border-bottom: 4px solid #fed330; 
    }


  @media(max-width: 700px) {
    text-decoration: none;
    list-style: none;
    color: #fed330;
    font-size: 35px;
    font-weight: 400;
    cursor: pointer;
  }

`;


const Ul = styled.ul`
  list-style: none;
  display: flex; 
  flex-flow: row nowrap;
  position: relative;
  z-index: 2;
   

  @media(max-width: 700px) {
    align-items: center;
    justify-content: center;
    list-style: none;
    display: flex; 
    flex-flow: column nowrap;
    background: #000;
    position: fixed;
    transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(100%)' )};
    /* opacity: ${({open}) => (open ? '100%' : '0')};
    top: ${({open}) => (open ? '0' : '-100%')}; */
    opacity: 0.9;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;    
  }
`;



const Content = ({open, toggle}) => {
  return (

    <Ul open={open} >
        {/* <Li to="bio-box" smooth={true} duration={1000} style={{color:"inherit"}} onClick={toggle}>
          About</Li>
          <Li to="bio-box" smooth={true} duration={1000} style={{color:"inherit"}} onClick={toggle}>
          Project</Li>
          <Li to="wave" activeClass="active" smooth={true} duration={1000} style={{color:"inherit"}} onClick={toggle}>
          Say Hi</Li> */}

          {menuData.map((item, index) => (
            <Li to={item.link} key={index} onClick={toggle} >
              {item.title}
            </Li>
          ))}
    </Ul>

  );
};

export default Content;