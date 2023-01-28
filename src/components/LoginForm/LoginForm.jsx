import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import { Form, Label } from './LoginForm.styled';
import { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
// import MailIcon from '@mui/icons-material/MailIcon';

// import { VisibilityOffSharp, VisibilitySharp } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityOffSharp from '@mui/icons-material/VisibilityOffSharp';
import VisibilitySharp from '@mui/icons-material/VisibilitySharp';

// import authOperations from 'redux/auth/operations';
// import { authOperations } from '../redux/auth';


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
    <Box sx={{ width: '420px', textAlign: 'center' }}>
      
      {/* <h1>Log In</h1> */}
      <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <MailIcon sx={{ color: '#0d90e7', mr: 1, mb: 1, }} />
        {/* <TextField id="input-with-sx" label="Email" variant="standard" /> */}
        <TextField
          onChange={handleChange}
          label="Email"
          name="email"
          variant="standard"
          id="standard-basic"
          sx={{ m: 1, width: '100%' }}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       {/* <MailIcon /> */}
          //     </InputAdornment>
          //   ),
          // }}
        />
        </Box>
        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            name="password"
            onChange={handleChange}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            startAdornment={
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffSharp /> : <VisibilitySharp />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button variant="contained" type="submit">
          Log in
        </Button>
      </form>
      {/* <ToastContainer /> */}
    </Box>



    // <div>

    //   <Form onSubmit={handleSubmit}  autoComplete="off">
    //     <Label >
    //       E-mail
    //       <input
    //         type="email"
    //         name="email"
    //         required
    //         value={email}
    //         onChange={handleChange}
    //       />
    //     </Label>

    //     <Label >
    //       Password
    //       <input
    //         type="password"
    //         name="password"
    //         required
    //         value={password}
    //         onChange={handleChange}
    //       />
    //     </Label>

    //     <button type="submit">Submit</button>
    //   </Form>
    // </div>
  );
}