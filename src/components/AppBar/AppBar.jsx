import { Header } from "./AppBar.styled";


export const AppBar = () => {
    const { isLoggedIn } = true;
  
    return (
      <Header >
        <navigation />
        {isLoggedIn ? <div>UserMenu</div>  : <div>AuthNav</div>}
      </Header>
    );
  };