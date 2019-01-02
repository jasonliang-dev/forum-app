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

const ThreadReplyForm = ({ classes, handleSubmit }) => (
  <form className={classes.form} onSubmit={handleSubmit}>
    <TextField
      id="content"
      name="body"
      label="Reply"
      placeholder="Type reply here"
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

ThreadReplyForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default compose(
  reduxForm({ form: 'thread-reply' }),
  withStyles(styles),
)(ThreadReplyForm);
