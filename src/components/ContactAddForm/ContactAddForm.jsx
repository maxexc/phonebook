import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { Title } from './ContactAddForm.styled'
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import { PersonAddAlt1 } from '@mui/icons-material';
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

    // const nameInputId = nanoid();
    // const numberInputId = nanoid();


  return (
    <Box
        component="form"
        autoComplete="off"
        maxWidth="420px"
        sx={{ margin: '0 auto' }}
        onSubmit={handleFormSubmit}
      >
        <Title >Add new contact</Title>
        <TextField
          onChange={handleInputChange}
          type="text"
          name="name"
          value={name}
          required
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          size="small"
          margin="normal"          
          fullWidth
          id="name"
          label="Name"
          inputProps={{
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonAddAlt1 sx={{ color: '#0f7ec9' }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          onChange={handleInputChange}
          type="tel"
          name="number"
          value={number}
          required
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          size="small"
          margin="normal"          
          fullWidth
          id="number"
          label="Number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIphoneIcon sx={{ color: '#0f7ec9' }} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          // fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 4 }}
        >
          Add contact
        </Button>        
    
    
      
    {/* <PhonebookForm onSubmit={handleFormSubmit} >
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
        </PhonebookForm> */}
    </Box>
  );
};

export default ContactForm;
