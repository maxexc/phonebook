import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import { Item, DeleteContact, Circle } from './Contact.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DeleteForeverOutlined } from '@mui/icons-material';
// import { Person, PersonOutline, AccountBox } from '@mui/icons-material';

export const Contact = ({ id, number, name }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
    toast.error(`Contact is removed from List.`, {position: "top-right", theme: "dark",}); 
  };

  return (    
      <Item >
        {/* <Person sx={{ mr: 1 }} /> */}
        <Circle>{name.charAt(0).toUpperCase()} </Circle>    
        
        <p>
          {name}: <span>{number}</span>
        </p>
        <DeleteContact type="button" onClick={onDelete}>Del
          <DeleteForeverOutlined sx={{ fontSize: 30 }} />
        </DeleteContact>
      </Item>    
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};