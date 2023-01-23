import React from 'react';
// import { NavLink } from 'react-router-dom';
import { MenuLink } from './Navigation.styled';



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