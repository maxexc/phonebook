import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label } from './LoginForm.styled';
// import { useState } from 'react';
// import authOperations from 'redux/auth/operations';
// import { authOperations } from '../redux/auth';


export default function LoginForm() {
  const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'email':
//         return setEmail(value);
//       case 'password':
//         return setPassword(value);
//       default:
//         return;
//     }
//   };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(logIn({ 
        email: form.elements.email.value, 
        password: form.elements.password.value, 
    }));
    
    form.reset();
    // setEmail('');
    // setPassword('');
  };

  return (
    <div>

      <Form onSubmit={handleSubmit}  autoComplete="off">
        <Label >
          E-mail
          <input
            type="email"
            name="email"
            // value={email}
            // onChange={handleChange}
          />
        </Label>

        <Label >
          Password
          <input
            type="password"
            name="password"
            // value={password}
            // onChange={handleChange}
          />
        </Label>

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}