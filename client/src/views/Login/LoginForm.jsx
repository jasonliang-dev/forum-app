import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import compose from 'ramda/src/compose';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '../../components/TextField/TextField';
import FormControlLabel from '../../components/FormControlLabel/FormControlLabel';

const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const LoginForm = ({ classes, handleSubmit }) => (
  <form className={classes.form} onSubmit={handleSubmit}>
    <TextField
      id="username"
      type="text"
      name="username"
      label="Username"
      margin="normal"
      autoFocus
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
    <FormControlLabel
      name="remember"
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
    />
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      Sign in
    </Button>
  </form>
);

LoginForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default compose(
  reduxForm({ form: 'login' }),
  withStyles(styles),
)(LoginForm);
