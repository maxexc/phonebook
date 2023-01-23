import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
import { fetchTasks } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { ContactList } from 'components/ContactList/ContactList';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <main>
        <title>Your Contacts</title>
      </main>
      {/* <TaskEditor /> */}
      <h2> Your Contacts </h2>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}

