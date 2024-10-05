import { Container } from '@mui/material';
import LoginForm from 'components/LoginForm/LoginForm';
import { TitleLogin } from './Title.styled';

export const Login = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        pt: 10,
        pb: 2,
      }}
      maxWidth="xl"
    >
      <TitleLogin>Log in</TitleLogin>
      <LoginForm />
    </Container>
  );
};

export default Login;

