import { useAuth } from 'Hooks';
import React from 'react';
// import { NavLink } from 'react-router-dom';
import { MenuLink } from './Navigation.styled';


const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <MenuLink to="/" >
        Home
      </MenuLink>

      { isLoggedIn && (
      <MenuLink to="/contacts">
        Contacts
      </MenuLink>
      )}
    </nav>
  );
};

export default Navigation;