import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import compose from 'ramda/src/compose';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import InputField from '../InputField/InputField';

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
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="email">Email</InputLabel>
      <InputField id="email" type="email" name="email" autoFocus />
    </FormControl>
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="username">Username</InputLabel>
      <InputField id="username" name="username" type="text" />
    </FormControl>
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="password">Password</InputLabel>
      <InputField name="password" type="password" id="password" />
    </FormControl>
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="password-confirm">Confirm Password</InputLabel>
      <InputField
        name="passwordConfirm"
        type="password"
        id="password-confirm"
      />
    </FormControl>
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
