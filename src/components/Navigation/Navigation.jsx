import React from 'react';
// import { NavLink } from 'react-router-dom';
import { MenuLink } from './Navigation.styled';


const Navigation = () => (
  <nav>
    <MenuLink to="/" >
      Home
    </MenuLink>

    <MenuLink to="/contacts">
      Contacts
    </MenuLink>
  </nav>
);

export default Navigation;