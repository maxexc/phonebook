import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import { Container } from '@mui/material';

import MailIcon from '@mui/icons-material/Mail';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityOffSharp from '@mui/icons-material/VisibilityOffSharp';
import VisibilitySharp from '@mui/icons-material/VisibilitySharp';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BottomText, StyledLink } from './LoginForm.styled';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';


export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'email': setEmail(event.currentTarget.value);
        break;
  
      case 'password': setPassword(event.currentTarget.value);
        break;
  
      default:
        return;
    };
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (email.trim() === "") {
      toast.info('Sorry, E-mail field cannot be empty');
      return;
    }
    if (password.length < 7) {
      toast.warn('Password must contain at least 7 characters');
      return;
    }
    
    dispatch(logIn({ 
        email: email.trim(), 
        password: password, 
    }));
  };

  return (
    <Container 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <Box sx={{ width: '420px', textAlign: 'center', p: '10px', border: '2px solid #0f7ec9', bgcolor: '#fff', borderRadius: '20px' }}>      
        <AutoStoriesIcon sx={{ fontSize: 80, mb: 3, color: '#0f7ec9' }} />
        <form onSubmit={handleSubmit} autoComplete="off">
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <MailIcon sx={{ color: '#0f7ec9', mr: 1, mb: 1, }} />
          <TextField
            onChange={handleChange}          
            label="Email"
            name="email"
            value={email}
            required
            variant="standard"
            id="standard-basic"
            title="Email must contain at list '@'. For example user@mail.com"
            sx={{ m: 1, width: '100%'  }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: '30px' }}>
          <KeyIcon sx={{ color: '#0f7ec9', mr: 1, mb: 1, }} />
          <FormControl sx={{ m: 1, width: '100%' }} variant="standard">        
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              onChange={handleChange}
              label="Password"
              name="password"
              value={password}                
              required
              id="standard-adornment-password"
              title="Your Password must include a minimum of 7 characters"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOffSharp sx={{ color: '#0f7ec9' }} /> : <VisibilitySharp />}
                  </IconButton>
                </InputAdornment>
              }
            />          
          </FormControl>
        </Box>        

          <Button variant="contained" type="submit">
            Log in
          </Button>
        </form>
        <BottomText>
            Don’t have an account yet?{' '}
            <StyledLink to="/register">Sign up</StyledLink>
        </BottomText>
        <ToastContainer position="top-center" autoClose={1500}/>
      </Box>
    </Container>
  );
}