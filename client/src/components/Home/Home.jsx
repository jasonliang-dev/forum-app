import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
});

const Discussion = ({ classes, ...rest }) => (
  <Paper className={classes.paper}>
    <Typography variant="body1" {...rest} />
  </Paper>
);

const Home = ({ classes }) => (
  <div>
    <Button variant="contained" color="primary" className={classes.button}>
      Hello World
    </Button>
    <Discussion classes={classes}>Foo</Discussion>
    <Discussion classes={classes}>Bar</Discussion>
    <Discussion classes={classes}>Baz</Discussion>
    <Discussion classes={classes}>Qux</Discussion>
  </div>
);

Home.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Home);
