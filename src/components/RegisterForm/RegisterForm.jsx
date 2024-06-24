import { AccountCircle, VisibilityOffSharp, VisibilitySharp } from '@mui/icons-material';
import KeyIcon from '@mui/icons-material/Key';
import MailIcon from '@mui/icons-material/Mail';
import { Box, Button, Container, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { BottomText, StyledLink } from './RegisterForm.styled';
import { toast } from 'react-toastify';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case "name": setName(event.currentTarget.value);
        break;
  
      case "email": setEmail(event.currentTarget.value);
        break;

      case 'password': setPassword(event.currentTarget.value);
        break;
  
      default:
        return;
    };
}
      

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === "") {
      toast.info('Sorry, Name field cannot be empty');
      return;
    }
    if (email.trim() === "") {
      toast.info('Sorry, E-mail field cannot be empty');
      return;
    }
    if (password.length < 7) {
      toast.warn('Password must contain at least 7 characters');
      return;
    }

    dispatch(
      register({
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
      })
    );
  };

  return (
    <Container 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <Box sx={{ width: '420px', textAlign: 'center', p: '10px', border: '2px solid #0f7ec9', bgcolor: '#fff', borderRadius: '20px' }}>
        <MenuBookIcon sx={{ fontSize: 80, mb: 3, color: '#0f7ec9' }} />
        <form onSubmit={handleSubmit} autoComplete="off">
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: '#0f7ec9', mr: 1, mb: 1, }}/>
            <TextField
              onChange={handleChange}
              label="Name"
              name="name"
              value={name}
              required
              variant="standard"
              id="outlined-start-adornment"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              sx={{ m: 1, width: '100%' }}
            />
          </Box>

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
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOffSharp sx={{ color: '#0f7ec9' }}/> : <VisibilitySharp />}
                    </IconButton>
                  </InputAdornment>
                }               
              />
            </FormControl>
          </Box>  

          <Button variant="contained" type="submit">
            Registration
          </Button>
        </form> 
        <BottomText>
            Already have an account? <StyledLink to="/login">Log in</StyledLink>
        </BottomText>
      </Box>  
    </Container>
  );
};
