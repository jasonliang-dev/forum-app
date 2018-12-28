import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import ChatIcon from '@material-ui/icons/Chat';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4,
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
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

const Home = ({ classes }) => (
  <div className={classes.root}>
    <Fab
      variant="extended"
      color="primary"
      aria-label="Add"
      className={classes.fab}
    >
      <AddIcon className={classes.extendedIcon} />
      Add Topic
    </Fab>
    <Discussion classes={classes} title="Foo" user="foo" />
  </div>
);

Discussion.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

Home.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Home);
