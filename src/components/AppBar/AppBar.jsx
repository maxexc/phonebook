import { AuthNav } from "components/AuthNav/AuthNav";
import Navigation from "components/Navigation/Navigation";
import { Header } from "./AppBar.styled";


export const AppBar = () => {
    const { isLoggedIn } = true;
  
    return (
      <Header >
        <Navigation />
        {isLoggedIn ? <div>UserMenu</div>  : <AuthNav />}
      </Header>
    );
  };