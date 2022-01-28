import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Logo, Menu } from './styles';

export const Header: React.FC<{}> = () => (
  <Navbar>
    <Logo>MyLogo</Logo>
    <Menu>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </Menu>
  </Navbar>
);
