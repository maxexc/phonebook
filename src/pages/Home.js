// import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { ContentTitle, HeroSection, Img, ImgWrapper, Main } from "./Title.styled";
import Stack from '@mui/material/Stack';
import { Container, Paper } from "@mui/material";
import image from '../images/writing-923882.jpg';
import AutoStoriesIcon from "@mui/icons-material/AutoStories";


export const Home = () => {
    return (
      <Main>
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 4,
          pb: 4
        }} maxWidth="xl">
          <AutoStoriesIcon sx={{ fontSize: 80, mb: 2, color: '#0f7ec9' }} />
          <ContentTitle>Welcome to your Phonebook application!</ContentTitle>
          <HeroSection>
            <ImgWrapper>
              <Img src={image} alt="woman width notebook" width="320" />
            </ImgWrapper>
            <Paper sx={{ p: 4 }} elevation={3}>
              <Stack
                direction="column"
                spacing={2}
                justifyContent="center"
                alignItems="center"
                fontSize={24}
                fontFamily='monospace'
                sx={{ maxWidth: '600px', margin: '0 auto' }}
              >
                <ContentTitle>About</ContentTitle>
                {/* <Image name="home.jpg" alt="A man looks at his laptop " w="300" /> */}
                <p>
                  This app allows you to be always close to your contacts. To start
                  using it right now, just <b><Link to="/register">create</Link></b> an account, it will not take much time, but you will be sure that you
                  already have access to them!
                </p>
              </Stack>
            </Paper>
          </HeroSection>
        </Container>
      </Main>
    );
  };
  
  export default Home;
  