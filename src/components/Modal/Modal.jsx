import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';

const Modal = ({ isEditing, setIsEditing, editName, setEditName, editNumber, setEditNumber, onPatch }) => {
  return (
    <Dialog
      open={isEditing}
      onClose={() => setIsEditing(false)}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth="sm"
      disableScrollLock={true}
      PaperProps={{
        style: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          color: 'var(--primary-color)',
          boxShadow: '0 4px 20px var(--shadow-color)',
          transition: 'all 0.3s ease',
        },
      }}
    >
      <DialogTitle id="form-dialog-title">Edit Contact</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Phone"
          type="text"
          fullWidth
          value={editNumber}
          onChange={(e) => setEditNumber(e.target.value)}
        />
      </DialogContent>
      <DialogActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '35px',
        }}
      >
        <Button onClick={() => setIsEditing(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={onPatch} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

Modal.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  setIsEditing: PropTypes.func.isRequired,
  editName: PropTypes.string.isRequired,
  setEditName: PropTypes.func.isRequired,
  editNumber: PropTypes.string.isRequired,
  setEditNumber: PropTypes.func.isRequired,
  onPatch: PropTypes.func.isRequired,
};

export default Modal;
