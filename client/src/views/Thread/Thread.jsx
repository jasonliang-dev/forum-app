import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';

const styles = {};

const Thread = ({ title, replies, classes }) => (
  <div>
    <Paper>
      <Typography variant="h4">{title}</Typography>
    </Paper>
  </div>
);

Thread.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Thread);
