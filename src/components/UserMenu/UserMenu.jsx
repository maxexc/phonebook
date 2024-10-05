import { Logout } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { useAuth } from "Hooks";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography
        sx={{ 
          fontFamily: 'Roboto, sans-serif',  
          textAlign: 'end', 
          fontSize: '15px',                   
          fontWeight: '500',                  
          letterSpacing: '1px',               
          color: 'var(--background-color)',
          textShadow: '1px 1px 2px black',
        }}
      >
        Welcome, {user.name}
      </Typography>
      <Button
        variant="contained"
        endIcon={<Logout />}
        type="button"
        onClick={() => dispatch(logOut())} 
        sx={{ 
          backgroundColor: '#1cb6cd', 
          flexShrink: 0, 
          padding: '6px 10px', 
          minWidth: 'fit-content',
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '14px',                 
          letterSpacing: '1px',             
          fontWeight: '500',                
        }}
      >
        Logout
      </Button>
    </Stack >
  );
};

