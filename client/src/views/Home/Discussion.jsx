import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import ChatIcon from '@material-ui/icons/Chat';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
});

const Discussion = ({ title, user, classes }) => (
  <Paper className={classes.paper}>
    <Grid container>
      <Grid item>
        <Avatar className={classes.icon}>
          <ChatIcon />
        </Avatar>
      </Grid>
      <Grid item>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2">{user}</Typography>
      </Grid>
    </Grid>
  </Paper>
);

Discussion.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Discussion);
