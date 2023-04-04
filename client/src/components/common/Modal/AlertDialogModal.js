import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

//defaultProps
AlertDialogModal.defaultProps = {
  disabled: false,
  onSubmit: ()=>{},
  title: 'title',
  buttonText: 'buttonText', 
  message: 'message'
};

export default function AlertDialogModal({onSubmit, disabled, title, buttonText, message}) {

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    onSubmit();
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} disabled={disabled}>
        {buttonText}
      </Button>
      <Dialog open={open} onClose={handleClose} PaperProps={{sx: { maxWidth:'500px', width:'30%'}}}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm} autoFocus>확인</Button>
          <Button onClick={handleClose}>취소</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
