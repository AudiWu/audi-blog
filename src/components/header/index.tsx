import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Logo, Menu } from './styles';
import { Color } from '../../enums/color';

export const Header: React.FC<{}> = () => (
  <Navbar>
    <Logo>MyLogo</Logo>
    <Menu>
      <ul>
        <li><Link to="/" activeStyle={{ color: Color.MALACHITE }}>About</Link></li>
        <li><Link to="/Experience" activeStyle={{ color: Color.MALACHITE }}>Experience</Link></li>
        <li><Link to="/Project" activeStyle={{ color: Color.MALACHITE }}>Projects</Link></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </Menu>
  </Navbar>
);
