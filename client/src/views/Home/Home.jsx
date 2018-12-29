import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Discussion from './Discussion';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

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

Home.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Home);
