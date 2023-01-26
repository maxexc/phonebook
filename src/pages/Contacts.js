import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
// import { selectFilter, selectLoading } from 'redux/contacts/selectors';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ContactForm from 'components/ContactAddForm/ContactAddForm';
import { Main } from './Title.styled';
// import { filterContacts } from 'redux/contacts/filterSlice';
// import { useAuth } from 'Hooks';
// import { ContactForm } from 'components/ContactAddForm/ContactAddForm';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  // const filter = useSelector(selectFilter); 
  // const { isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const changeFilter = event => {
  //   dispatch(filterContacts(event.currentTarget.value))
  // };

  return (
    <Main>
      {/* {isLoggedIn ? ( ) :  (<div>Please Login or register</div>) } */}
        <h2> 
            <AccountBoxIcon fontSize="large" sx={{ mr: 1 }} />
                 Your Contacts 
        </h2>
        <Filter
        //   value={filter}
        // onFilter={changeFilter}
      />
        {/* <Filter /> */}
        <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />      
      
    </Main>
  );
}
