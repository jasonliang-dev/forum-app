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
import { fetchData } from '../../actions/fetchActions';
import environment from '../../environment';

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

const mapStateToProps = state => ({ ...state.fetchData });

const mapDispatchToProps = dispatch => ({
  fetchThreads: () => dispatch(fetchData(`${environment.endpoint}/threads`)),
});

export class DisconnectedHome extends React.Component {
  componentDidMount() {
    const { fetchThreads } = this.props;
    fetchThreads();
  }

  render() {
    const { classes, data, isLoading, errorOccurred } = this.props;

    if (errorOccurred)
      return (
        <Typography variant="h4" classname={classes.root}>
          Error fetching threads. Try again later.
        </Typography>
      );

    if (isLoading || !Array.isArray(data))
      return <CircularProgress className={classes.loadingSpinner} />;

    return (
      <div className={classes.root}>
        <Fab
          component={Link}
          to="/thread/create"
          variant="extended"
          color="secondary"
          aria-label="Add"
          disabled={!localStorage.getItem('id_token')}
          className={classes.fab}
        >
          <AddIcon className={classes.extendedIcon} />
          Add Topic
        </Fab>
        <Typography variant="h4">Threads</Typography>
        {data.map(thread => (
          <Discussion
            key={thread._id}
            title={thread.title}
            user={thread.owner.username}
            to={`thread/${thread._id}`}
            views={thread.viewCount}
            replyCount={thread.replies.length}
          />
        ))}
      </div>
    );
  }
}

DisconnectedHome.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  fetchThreads: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
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
