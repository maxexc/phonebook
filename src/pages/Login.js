// import { Container } from '@mui/material';
import LoginForm from 'components/LoginForm/LoginForm';
import TsparticlesLayout from 'components/TsparticlesLayout/TsparticlesLayout';
import { Title } from './Title.styled';

export const Login = () => {
  return (
    <main >
      {/* <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
          pt: 2,
          pb: 2,          
        }}
        maxWidth="xl"
      >       */}
        <TsparticlesLayout />
        <Title>Log in</Title>
        <LoginForm />
      {/* </Container> */}
    </main>
  );
};

export default Login;

