import { useDispatch, useSelector } from 'react-redux';
// import { Task } from '../Task/Task';
import { Contact } from 'components/Contact/Contact';
// import css from './TaskList.module.css';
import { List } from './ContactList.styled';
import { selectFilter, selectСontacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';


export const ContactList = () => {
  const contacts = useSelector(selectСontacts);
  console.log(selectСontacts);
  console.log(contacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

  return (
    <List >
      {filteredContacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
