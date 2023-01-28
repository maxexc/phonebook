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

  //   ---  or ---
  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };


  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements.email.value.trim() === "") {
      // toast.success('Password must contain at least 7 characters',
      // {duration: 1500, icon: '💡', style: {borderRadius: '20px', color: '#fd6017',} }, );
      toast.info('Sorry, E-mail field cannot be empty');
      return;
    }
    if (form.elements.password.value.length < 6) {
      // toast.success('Password must contain at least 7 characters',
      // {duration: 1500, icon: '💡', style: {borderRadius: '20px', color: '#fd6017',} }, );
      toast.warn('Password must contain at least 7 characters');
      return;
    }
    
    dispatch(logIn({ 
        email: form.elements.email.value.trim(), 
        password: form.elements.password.value, 
    }));
    
    form.reset();
    // --- either  ---
    // setEmail('');
    // setPassword('');
  };

  return (
    <Container 
      sx={{ 
        height: '100vh',
        display: 'flex', 
        justifyContent: 'center',
        alignContent: 'center',
        // bgcolor: 'tomato',
      }}>
      <Box sx={{ width: '420px', textAlign: 'center', px: '10px', border: '2px solid #0f7ec9', bgcolor: '#fff', height: '200px', borderRadius: '20px', pt: '10px' }}>      
        <form onSubmit={handleSubmit}>
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
            sx={{ m: 1, width: '100%'  }}
          />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: '10px' }}>
            <KeyIcon sx={{ color: '#0f7ec9', mr: 1, mb: 1, }} />
          <FormControl sx={{ m: 1, width: '100%' }} variant="standard">        
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              name="password"
              value={password}
              onChange={handleChange}
              required
              id="standard-adornment-password"
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
        <ToastContainer position="top-center" autoClose={1500}/>
      </Box>
    </Container>
  );
}