import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import compose from 'ramda/src/compose';
import ReplyIcon from '@material-ui/icons/Reply';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
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
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  paper: {
    padding: theme.spacing.unit * 3,
    margin: `${theme.spacing.unit}px 0`,
  },
  loadingSpinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -20,
    marginTop: -20,
  },
});

export class DisconnectedThread extends React.Component {
  componentDidMount() {
    const { fetchData, match } = this.props;
    fetchData(`${environment.endpoint}/threads/${match.params.id}`);
  }

  render() {
    const { classes, data: payload, errorOccurred, match } = this.props;

    if (errorOccurred)
      return (
        <Typography variant="h4" className={classes.root}>
          Error fetching thread. Try again later.
        </Typography>
      );

    if (!payload || !payload.data)
      return <CircularProgress className={classes.loadingSpinner} />;

    return (
      <div className={classes.root}>
        <Fab
          component={Link}
          to={`/threads/reply/${match.params.id}`}
          variant="extended"
          color="secondary"
          aria-label="Reply"
          disabled={!localStorage.getItem('id_token')}
          className={classes.fab}
        >
          <ReplyIcon className={classes.extendedIcon} />
          Reply to thread
        </Fab>
        <Typography variant="h4" gutterBottom component="h2">
          {payload.data.title}
        </Typography>
        <Paper className={classes.paper}>
          <Typography variant="caption">
            posted {moment(payload.data.created).fromNow()}
          </Typography>
          <Typography variant="body1">{payload.data.body}</Typography>
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant="h6">Replies</Typography>
        </Paper>
      </div>
    );
  }
}

DisconnectedThread.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  fetchData: PropTypes.func.isRequired,
  data: PropTypes.shape({}),
  match: PropTypes.shape({}).isRequired,
  errorOccurred: PropTypes.bool,
};

DisconnectedThread.defaultProps = {
  data: undefined,
  errorOccurred: false,
};

export default compose(
  connectFetcher('thread'),
  withStyles(styles),
)(DisconnectedThread);
