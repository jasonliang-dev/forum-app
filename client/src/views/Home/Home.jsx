import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import compose from 'ramda/src/compose';
import withStyles from '@material-ui/core/styles/withStyles';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import CircularProgress from '@material-ui/core/CircularProgress';
import Discussion from './Discussion';
import { connectFetcher } from '../../actions/fetchActions';
import environment from '../../environment';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4,
    zIndex: 10,
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

export class DisconnectedHome extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(`${environment.endpoint}/threads`);
  }

  render() {
    const { classes, data, errorOccurred } = this.props;

    if (errorOccurred)
      return (
        <Typography variant="h4" className={classes.root}>
          Error fetching threads. Try again later.
        </Typography>
      );

    if (!data || data.length === 0)
      return <CircularProgress className={classes.loadingSpinner} />;

    return (
      <div className={classes.root}>
        <Fab
          component={Link}
          to="/thread/create"
          variant="extended"
          color="primary"
          aria-label="Add"
          disabled={!localStorage.getItem('id_token')}
          className={classes.fab}
        >
          <AddIcon className={classes.extendedIcon} />
          Add Topic
        </Fab>
        <Typography variant="h4" gutterBottom component="h2">
          Threads
        </Typography>
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
  fetchData: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  errorOccurred: PropTypes.bool,
};

DisconnectedHome.defaultProps = {
  data: [],
  errorOccurred: false,
};

export default compose(
  connectFetcher('home'),
  withStyles(styles),
)(DisconnectedHome);
