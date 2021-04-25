import React, { Component } from 'react';
import {Link} from 'react-scroll';
import styled from 'styled-components';


import Logo from '../../images/Logo_Main.png';
import Burger from './burger'


const Nav = styled.nav`
  max-width: 100%;
  width: 100%;
  height:65px;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  z-index: 500;

  .logo {
    height: 50px;
    cursor: pointer;
  }
 
`;

class Navbar extends Component {
  render() {
    return (
      <Nav >
      <div className="logo">
      <Link to="text-box" smooth={true} duration={1000} >
          <img alt="logo" src={Logo} className="logo" />
      </Link>
      </div>
      <Burger />
    </Nav>
    );
  }
}

export default Navbar;