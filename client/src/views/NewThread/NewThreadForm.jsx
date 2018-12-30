import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import compose from 'ramda/src/compose';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import TextField from '../../components/TextField/TextField';

const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    marginTop: theme.spacing.unit * 2,
  },
});

const NewThreadForm = ({ classes, handleSubmit }) => (
  <form className={classes.form} onSubmit={handleSubmit}>
    <TextField
      id="title"
      type="text"
      name="title"
      label="Title"
      margin="normal"
      fullWidth
      autoFocus
    />
    <TextField
      id="content"
      name="body"
      label="Content"
      placeholder="Type thread content here"
      variant="outlined"
      margin="normal"
      multiline
      fullWidth
    />
    <Button
      type="submit"
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      Create
    </Button>
  </form>
);

NewThreadForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default compose(
  reduxForm({ form: 'new-thread' }),
  withStyles(styles),
)(NewThreadForm);
