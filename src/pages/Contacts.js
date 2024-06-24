import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import ContactForm from 'components/ContactAddForm/ContactAddForm';
import { Main } from './Title.styled';

import Loader from 'components/Loader/Loader';
import { Container } from '@mui/system';


export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Main>
      <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", pt: 2, pb: 4 }} maxWidth="xl">
        {isLoading && <Loader />}
        <ContactForm />
        <Filter />
        <ContactList />
      </Container>
    </Main>
  );
}
