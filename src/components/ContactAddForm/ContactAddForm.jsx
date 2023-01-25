import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
// import { addContact } from "redux/operations";
// import { addTask } from 'redux/tasks/operations';
// import css from './TaskEditor.module.css';
import {
    FormTitle,
    PhonebookForm,
    FormLabel,
    FormInput,
    FormBtn,
} from './ContactAddForm.styled'
import { addContact } from 'redux/contacts/operations';


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
        // onsubmit({
        //     name: name,
        //     number: number,
        //     id: nanoid(),
        // });
        // console.log(onSubmit)
        dispatch(addContact(newContact));

        setName('');
        setNumber('');
    }

    const nameInputId = nanoid();
    const numberInputId = nanoid();

    
//   const handleFormSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const text = form.elements.text.value;
//     if (text !== '') {
//       dispatch(addTask(text));
//       form.reset();
//       return;
//     }
//     alert('Task cannot be empty. Enter some text!');
//   };

  return (
    // <form className={css.form} onSubmit={handleSubmit}>
    //   <input name="text" className={css.input} />
    //   <button type="submit" className={css.button}>
    //     Add task
    //   </button>
    // </form>
    <PhonebookForm onSubmit={handleFormSubmit} >
    <FormTitle>Phonebook</FormTitle>
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
  );
};

export default ContactForm;