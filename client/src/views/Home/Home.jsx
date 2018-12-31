import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'ramda/src/compose';
import withStyles from '@material-ui/core/styles/withStyles';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import CircularProgress from '@material-ui/core/CircularProgress';
import Discussion from './Discussion';
import { getThreads } from './HomeActions';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  loadingSpinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -20,
    marginTop: -20,
  },
});

const mapStateToProps = state => ({ ...state.home });

const mapDispatchToProps = dispatch => ({
  fetchThreads: () => dispatch(getThreads),
});

export class DisconnectedHome extends React.Component {
  componentDidMount() {
    const { fetchThreads } = this.props;
    fetchThreads();
  }

  render() {
    const { classes, threads, isLoading, errorOccurred } = this.props;

    if (errorOccurred) {
      return <h1>Error</h1>;
    }

    if (isLoading) {
      return <CircularProgress className={classes.loadingSpinner} />;
    }

    return (
      <div className={classes.root}>
        <Fab
          component={Link}
          to="/threads/create"
          variant="extended"
          color="primary"
          aria-label="Add"
          className={classes.fab}
        >
          <AddIcon className={classes.extendedIcon} />
          Add Topic
        </Fab>
        <Typography variant="h4">Threads</Typography>
        {threads.map(thread => (
          <Discussion
            key={thread._id} // eslint-disable-line no-underscore-dangle
            title={thread.title}
            user={thread.owner.username}
          />
        ))}
      </div>
    );
  }
}

DisconnectedHome.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  fetchThreads: PropTypes.func.isRequired,
  threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorOccurred: PropTypes.bool.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStyles(styles),
)(DisconnectedHome);
