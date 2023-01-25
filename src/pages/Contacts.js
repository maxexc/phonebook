import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ContactForm from 'components/ContactAddForm/ContactAddForm';
import { Main } from './Title.styled';
import { useAuth } from 'Hooks';
// import { ContactForm } from 'components/ContactAddForm/ContactAddForm';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Main>
      {isLoggedIn ? (
        <h2> 
            <AccountBoxIcon fontSize="large" sx={{ mr: 1 }} />
                 Your Contacts 
        </h2>,
        <Filter />,
        <ContactForm />,
      <div>{isLoading && 'Request in progress...'}</div>,
      <ContactList />
      ) : 
      (<div>Please Login or register</div>)}
    </Main>
  );
}

      {/* <Main>
        <title>Your Contacts</title>
      </Main>       */}