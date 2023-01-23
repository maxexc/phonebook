import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuLink } from './Navigation.styled';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => (
  <nav>
    <MenuLink to="/" >
    {/* <MenuLink to="/" > */}
      Главная
    </MenuLink>

    <MenuLink
      to="/contacts"
      
    >
      Контакты
    </MenuLink>
  </nav>
);

export default Navigation;