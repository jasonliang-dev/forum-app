import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import NewThreadForm from './NewThreadForm';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 4,
    padding: theme.spacing.unit * 3,
  },
});

const NewThread = ({ classes }) => (
  <Paper className={classes.paper}>
    <Typography variant="h6">New Thread</Typography>
    <NewThreadForm />
  </Paper>
);

NewThread.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(NewThread);
