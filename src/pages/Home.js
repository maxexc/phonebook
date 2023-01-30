import { Link } from "react-router-dom";
import { ContentText, ContentTitle, HeroSection, Img, ImgWrapper, Main } from "./Title.styled";
import { Container, Paper, Typography } from "@mui/material";
import image from '../images/writing-011.jpg';
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
          <Typography variant="h1" sx={{ fontStyle: 'italic', fontFamily: 'monospace', fontSize: '24px', fontWeight: '700',}}>Welcome to your  <span style={{ color: '#0f7ec9', }} >Phonebook</span> application!</Typography>
          <HeroSection>
            <ImgWrapper>
              <Img src={image} alt="woman width notebook" width="320" />
            </ImgWrapper>
            <Paper sx={{ p: 4, fontFamily: 'monospace',  }}   elevation={3}>
                <ContentTitle>About</ContentTitle>
                <ContentText>
                  Phonebook app is an easy to use contact manager app that gives you facility 
                  of saving and viewing your contacts, so you never lose your contacts.
                  To use the application right now, just <b><Link to="/register">create</Link></b> an account, 
                  and your contacts will always be close to you at any time!
                </ContentText>
            </Paper>
          </HeroSection>
        </Container>
      </Main>
    );
  };
  
  export default Home;
  