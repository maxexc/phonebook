import { Container } from '@mui/material';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import TsparticlesLayout from 'components/TsparticlesLayout/TsparticlesLayout';
import { Title } from './Title.styled';

const Register = () => {
  return (
    <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
          pt: 2,
          pb: 2,          
        }}
        maxWidth="xl"
      >
      <TsparticlesLayout />
      <Title>Registration</Title>
      <RegisterForm />
    </Container>
  );
};

export default Register;
