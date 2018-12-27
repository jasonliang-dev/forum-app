import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

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

const SignIn = ({ classes }) => (
  <div className={classes.root}>
    <Paper className={classes.paper}>
      <form className={classes.form}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            id="username"
            name="username"
            autoComplete="username"
            autoFocus
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </FormControl>
        <FormControlLabel
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
    </Paper>
  </div>
);

SignIn.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(SignIn);
