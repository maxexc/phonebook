import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import ContactForm from 'components/ContactAddForm/ContactAddForm';
import { Main } from './Title.styled';

import PeopleAlt from '@mui/icons-material/PeopleAlt';
import Loader from 'components/Loader/Loader';


export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  // console.log(isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Main>
      {isLoading && <Loader />}
      {/* {isLoggedIn ? ( ) :  (<div>Please Login or register</div>) } */}
        {/* <h2> 
            <PeopleAlt fontSize="large" sx={{ mr: 1 }} />
                 Your Contacts 
        </h2> */}
        
      <ContactForm />
      <Filter />
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      <ContactList />      
      
    </Main>
  );
}
