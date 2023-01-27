import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Label, RegForm } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    console.log(name, email, password);
}
      

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value.trim(),
        email: form.elements.email.value.toLowerCase().trim(),
        password: form.elements.password.value.trim(),
      })
    );
    form.reset();
  };

  return (
    <RegForm  onSubmit={handleSubmit} autoComplete="off">
      <Label >
        Username
        <input 
          type="text"
          name="name"
          id={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Emmy Richards"
          required
          value={name}
          onChange={handleChange}          
        />
      </Label>
      <Label >
        Email
        <input 
          type="email"
          name="email"
          id={email}
          title="Email must contain at list '@'. For example user@mail.com"
          placeholder="user@mail.com"
          required
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label >
        Password
        <input
          type="password"
          name="password"
          id={123`password`}
          title="Your Password must include a minimum of 7 characters"
          placeholder="password"
          required
          value={password}
          onChange={handleChange}  
        />
      </Label>
      <button type="submit">Register</button>
    </RegForm>
  );
};
