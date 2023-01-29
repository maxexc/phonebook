import { Logout } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { useAuth } from "Hooks";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { UserName } from "./UserMenu.styled";


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography
        sx={{ fontFamily: 'cursive' }}
      >
        Welcome, {user.name}
      </Typography>
      {/* <UserName >Welcome, {user.name}</UserName> */}
      <Button
        variant="contained"
        endIcon={<Logout />}
        type="button"
        onClick={() => dispatch(logOut())} 
        sx={{ backgroundColor: '#1cb6cd', flexShrink: 0 }}
      >
        Logout
      </Button>
    </Stack >
  );
};

