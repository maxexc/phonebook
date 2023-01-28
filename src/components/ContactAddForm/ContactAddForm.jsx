import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import {
    FormTitle,
    PhonebookForm,
    FormLabel,
    FormInput,
    FormBtn,
} from './ContactAddForm.styled'
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import { AccountCircle, PhoneIphone } from '@mui/icons-material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';



export const ContactForm = () => {   
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = event => {
        switch (event.currentTarget.name) {
          case "name": setName(event.currentTarget.value)
          break
      
          case "number": setNumber(event.currentTarget.value)
          break
      
          default:
          return
        };
        console.log(name, number);
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        const newContact = {
            name,
            number,
            id: nanoid(),
        };

        // toaster
        // toaster
        // toaster

        dispatch(addContact(newContact));

        setName('');
        setNumber('');
    }

    const nameInputId = nanoid();
    const numberInputId = nanoid();


  return (
    <Box
        component="form"
        autoComplete="off"
        maxWidth="600px"
        sx={{ margin: '0 auto' }}
        onSubmit={handleFormSubmit}
      >
        <title>Create new contact</title>
        <TextField
          onChange={handleInputChange}
          value={name}
          type="text"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          size="small"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          inputProps={{
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          onChange={handleInputChange}
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          size="small"
          margin="normal"
          required
          fullWidth
          id="number"
          label="Number"
          name="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIphoneIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 4 }}
        >
          Add contact
        </Button>
          
    
    
      
    <PhonebookForm onSubmit={handleFormSubmit} >
    <FormTitle>Create new contact</FormTitle>
        <FormLabel htmlFor={nameInputId} >
            Name {''}
        </FormLabel>                
        <FormInput
            type="text"
            name="name"
            id={nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Emmy Richards"
            required
            value={name}
            onChange={handleInputChange}
        />                
        
        <FormLabel htmlFor={numberInputId}>
            Number {''}
        </FormLabel>                
        <FormInput
            type="tel"
            name="number"
            id={numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="000-000-00"
            required
            value={number}
            onChange={handleInputChange}
        />                        
        <FormBtn type="submit">Add contact</FormBtn>
        </PhonebookForm>
    </Box>
  );
};

export default ContactForm;
