import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './Nav';
import logo from '../images/istockphoto-1150644423-612x612.jpg'

const Header = () => {
    return (
        <MainHeader>
            <NavLink to="/"> <img className='logo' src={logo} alt="logo" /></NavLink>
            <Nav/>
            
        </MainHeader>
        
    );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 8rem;
  }
  `;


export default Header;