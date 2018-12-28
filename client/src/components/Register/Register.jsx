import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import compose from 'ramda/src/compose';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import environment from '../../environment';
import { inspect } from '../../utils';

const styles = theme => ({
  root: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

let RegisterForm = ({ classes, handleSubmit }) => (
  <form className={classes.form} onSubmit={handleSubmit}>
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="email">Email</InputLabel>
      <Input id="email" type="email" name="email" autoFocus />
    </FormControl>
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="username">Username</InputLabel>
      <Input id="username" name="username" type="text" />
    </FormControl>
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="password">Password</InputLabel>
      <Input name="password" type="password" id="password" />
    </FormControl>
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="password-confirm">Confirm Password</InputLabel>
      <Input name="passwordConfirm" type="password" id="password-confirm" />
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

RegisterForm = compose(
  reduxForm({ form: 'register' }),
  withStyles(styles),
)(RegisterForm);

const handleSubmit = values => {
  console.log('values', values);
};

const Register = ({ classes }) => (
  <div className={classes.root}>
    <Paper className={classes.paper}>
      <RegisterForm onSubmit={handleSubmit} />
    </Paper>
  </div>
);

Register.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Register);
