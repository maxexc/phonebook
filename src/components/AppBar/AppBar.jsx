import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { AuthNav } from "components/AuthNav/AuthNav";
import Navigation from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "Hooks";
import { Link } from "react-router-dom";

export const AppNavBar = () => {
  const { isLoggedIn } = useAuth();
    // console.log(isLoggedIn);
  
  return (
    <AppBar>
      <Container >
        <Toolbar
          sx={{paddingInline: { xs: '6px', sm: '16px' } }}
        >
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to='/'
            sx={{
              mr: 5,
              mb: 1,
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'revert-layer',
              fontWeight: 500,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <AutoStoriesIcon sx={{ color: '#fff', pr: 1, mt: 0.5 }}/>
            Phonebook
          </Typography>

          <Box sx={{ 
            flexGrow: 24,
            fontWeight: 700,
            textDecoration: 'none'
          }}>   
            <Navigation />
          </Box>

            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </Toolbar>
      </Container>
    </AppBar>
    );
  };
