import { AuthNav } from "components/AuthNav/AuthNav";
import { Header } from "./AppBar.styled";


export const AppBar = () => {
    const { isLoggedIn } = true;
  
    return (
      <Header >
        <span />
        {isLoggedIn ? <div>UserMenu</div>  : <AuthNav />}
      </Header>
    );
  };