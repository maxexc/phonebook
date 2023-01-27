import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
}