import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const DeleteDialog = ({ openState, close, onDelete }) => (
  <Dialog
    open={openState}
    onClose={close}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle>Delete Thread</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Do you really want to delete this thread?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={close}>Nonono go back</Button>
      <Button variant="contained" onClick={onDelete} color="primary">
        Yes, delete
      </Button>
    </DialogActions>
  </Dialog>
);

DeleteDialog.propTypes = {
  openState: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteDialog;
