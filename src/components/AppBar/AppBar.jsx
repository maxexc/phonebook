import { AuthNav } from "components/AuthNav/AuthNav";
import Navigation from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "Hooks";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "redux/auth/selectors";
import { Header } from "./AppBar.styled";


export const AppBar = () => {
    // const { isLoggedIn } = useSelector(selectIsLoggedIn);
  const { isLoggedIn } = useAuth();

    console.log(isLoggedIn);
  
    return (
      <Header >
        <Navigation />
        {isLoggedIn ? <UserMenu />  : <AuthNav />}
      </Header>
    );
  };
