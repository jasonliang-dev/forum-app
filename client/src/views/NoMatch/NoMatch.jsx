import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
  },
  divider: {
    margin: `${theme.spacing.unit * 1}px 0`,
  },
});

const NoMatch = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="h4">404 Not Found</Typography>
    <Divider className={classes.divider} />
    <Typography variant="body1">
      I can&#39;t find whatever you&#39;re trying to find.
    </Typography>
  </div>
);

NoMatch.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(NoMatch);
