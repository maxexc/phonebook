import { useAuth } from "Hooks";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { UserName, Wrapper } from "./UserMenu.styled";



export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper >
      <UserName >Welcome, {user.name}</UserName>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Wrapper>
  );
};
