// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
// import { deleteContact } from 'redux/contacts/operations';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Item, DeleteContact } from './Contact.styled';

export const Contact = ({ id, number, name }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Item>
        <AccountBoxIcon fontSize="large" sx={{ mr: 1 }} />
        <p>
          {name}: <span>{number}</span>
        </p>
        <DeleteContact type="button" onClick={onDelete}>Delete
          <DeleteForeverOutlinedIcon sx={{ fontSize: 30 }} />
        </DeleteContact>
      </Item>
    </>
  );
};