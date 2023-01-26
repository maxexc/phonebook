import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import ContactForm from 'components/ContactAddForm/ContactAddForm';
import { Main } from './Title.styled';

import AccountBoxIcon from '@mui/icons-material/AccountBox';


export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Main>
      {/* {isLoggedIn ? ( ) :  (<div>Please Login or register</div>) } */}
        <h2> 
            <AccountBoxIcon fontSize="large" sx={{ mr: 1 }} />
                 Your Contacts 
        </h2>
        <Filter />
        <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />      
      
    </Main>
  );
}
