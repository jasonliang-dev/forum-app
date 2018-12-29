import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import RegisterForm from './RegisterForm';
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
});

const handleSubmit = values => {
  axios
    .post(`${environment.endpoint}/users`, values)
    .then(inspect)
    .catch(err => {
      alert(err.message);
      console.log(err);
    });
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
