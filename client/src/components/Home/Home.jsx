import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    padding: `0 ${theme.spacing.unit * 3}px`,
    margin: '0 auto',
    width: '50%',
  },
  button: {
    margin: theme.spacing.unit,
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
});

const Home = ({ classes }) => (
  <div className={classes.root}>
    <Button variant="contained" color="primary" className={classes.button}>
      Hello World
    </Button>
    <Paper className={classes.paper}>Foo</Paper>
    <Paper className={classes.paper}>Foo</Paper>
    <Paper className={classes.paper}>Foo</Paper>
    <Paper className={classes.paper}>Foo</Paper>
  </div>
);

Home.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Home);
