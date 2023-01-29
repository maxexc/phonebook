import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { Title } from './ContactAddForm.styled'
import { Box, Button, TextField } from '@mui/material';
import { PeopleAlt, PersonAddAlt1 } from '@mui/icons-material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { selectСontacts } from 'redux/contacts/selectors';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const ContactForm = () => {   
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch(); 
    const contacts = useSelector(selectСontacts);
    // console.log(contacts);

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

        const repeatCheck = contacts.find(item => item.name.toLowerCase() === newContact.name.toLowerCase());
    
    if (repeatCheck) {
      toast.warn(`Name  ${newContact.name}  is alredy in contacts!`);
      return;
    }

        dispatch(addContact(newContact));
        toast.success(`You have added a new contact ${newContact.name}`);

        setName('');
        setNumber('');
    }

  return (
    <Box
      display="flex"
      flexDirection={'column'}
      gap="10px"
      justifyContent="center"
      alignItems="center"
        component="form"
        autoComplete="off"
        maxWidth="420px"
        onSubmit={handleFormSubmit}
      >
        <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: "10px" }}>
          <Title >Add new contact</Title>
          <PeopleAlt />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <PersonAddAlt1 sx={{ color: '#0f7ec9', mr: 1, my: 0.5 }} />
          <TextField
            sx={{ width: '260px' }}
            variant="standard"
            onChange={handleInputChange}
            type="text"
            name="name"
            value={name}
            required
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            size="small"
            margin="none"          
            // fullWidth
            id="name"
            label="Name"
            inputProps={{
              pattern:
                "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            }}            
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <PhoneIphoneIcon sx={{ color: '#0f7ec9', mr: 1, my: 0.5 }} />
          <TextField
            sx={{ width: '260px' }}
            variant="standard"
            onChange={handleInputChange}
            type="tel"
            name="number"
            value={number}
            required
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            size="small"
            margin="none"          
            fullWidth
            id="number"
            label="Number"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}            
          />
        </Box>       
          <Button
            type="submit"
            // fullWidth
            variant="contained"
            sx={{ mr: -1, mt: "18px", width: '200px' }}
          >
            Add contact
          </Button>  

          <ToastContainer position="top-center" autoClose={1500}/>                   
    </Box>
  );
};

export default ContactForm;
