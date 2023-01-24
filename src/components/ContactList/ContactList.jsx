import { useSelector } from 'react-redux';
// import { Task } from '../Task/Task';
import { Contact } from 'components/Contact/Contact';
// import css from './TaskList.module.css';
import { List } from './ContactList.styled';
import { selectAllСontacts } from 'redux/contacts/selectors';


export const ContactList = () => {
  const contacts = useSelector(selectAllСontacts);

  return (
    <List >
      {contacts.map(({ id, text }) => (
        <li key={id}>
          <Contact id={id} text={text} />
        </li>
      ))}
    </List>
  );
};
