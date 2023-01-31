import { Container } from '@mui/material';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import TsparticlesLayout from 'components/TsparticlesLayout/TsparticlesLayout';
import { Title } from './Title.styled';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Register = () => {
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
      <TsparticlesLayout />
      <Title>Registration</Title>
      <RegisterForm />   
      <ToastContainer autoClose={1500}/>
    </Container>
  );
};

export default Register;
