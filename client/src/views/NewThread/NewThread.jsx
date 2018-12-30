import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import NewThreadForm from './NewThreadForm';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
  },
  paper: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
});

const NewThread = ({ classes }) => (
  <div className={classes.root}>
    <Paper className={classes.paper}>
      <Typography variant="h6">New Thread</Typography>
      <NewThreadForm />
    </Paper>
  </div>
);

NewThread.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(NewThread);
