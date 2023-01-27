import { useAuth } from 'Hooks';
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