import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact, patchContact } from 'redux/contacts/operations';
import { Item, DeleteContact, PatchContact, Circle, ButtonsWrapper, ContactInfo, Name, Number, Wrapper } from './Contact.styled';
import { DeleteForeverOutlined, EditOutlined } from '@mui/icons-material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'components/Modal/Modal';

export const Contact = ({ id, number, name }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number);

  const openEditModal = () => {
    setEditName(name);  
    setEditNumber(number);  
    setIsEditing(true);  
  };

  const onPatch = () => {
    dispatch(patchContact({ id, name: editName, number: editNumber }));
    setIsEditing(false);
    toast.success(`Nice! ${editName} is looking fresh and updated! 🎉`, { position: "top-right" });
  };

  const onDelete = () => {
    dispatch(deleteContact(id));
    toast.error(`Oh no! ${name} is gone. Say goodbye! 👋`, { position: "top-right", theme: "dark" });
  };

  return (
    <>
      <Item>
        <ContactInfo>
          <Circle>{name.charAt(0).toUpperCase()}</Circle>
          <Wrapper>
            <Name>{name}</Name>
            <Number>{number}</Number>
          </Wrapper>          
        </ContactInfo>

        <ButtonsWrapper>
          <PatchContact type="button" onClick={openEditModal}>
            <EditOutlined sx={{ fontSize: 30 }} />
          </PatchContact>

          <DeleteContact type="button" onClick={onDelete}>
            <DeleteForeverOutlined sx={{ fontSize: 30 }} />
          </DeleteContact>
        </ButtonsWrapper>
      </Item>

      <Modal
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editName={editName}
        setEditName={setEditName}
        editNumber={editNumber}
        setEditNumber={setEditNumber}
        onPatch={onPatch}
      />
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
