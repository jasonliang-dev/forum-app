import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import compose from 'ramda/src/compose';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '../../components/TextField/TextField';

const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const RegisterForm = ({ classes, handleSubmit }) => (
  <form className={classes.form} onSubmit={handleSubmit}>
    <TextField
      id="email"
      type="email"
      name="email"
      label="Email"
      margin="normal"
      autoFocus
      required
      fullWidth
    />
    <TextField
      id="username"
      type="text"
      name="username"
      label="Username"
      margin="normal"
      required
      fullWidth
    />
    <TextField
      id="password"
      type="password"
      name="password"
      label="Password"
      margin="normal"
      required
      fullWidth
    />
    <TextField
      id="password-confirm"
      type="password"
      name="passwordConfirm"
      label="Confirm Password"
      margin="normal"
      required
      fullWidth
    />
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      Register
    </Button>
  </form>
);

RegisterForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default compose(
  reduxForm({ form: 'register' }),
  withStyles(styles),
)(RegisterForm);
