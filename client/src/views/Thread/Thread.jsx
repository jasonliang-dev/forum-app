import React from 'react';
import PropTypes from 'prop-types';
import compose from 'ramda/src/compose';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connectFetcher } from '../../actions/fetchActions';
import environment from '../../environment';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
  },
  paper: {
    padding: theme.spacing.unit * 3,
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
    const { classes, data: payload, errorOccurred } = this.props;

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
        <Paper className={classes.paper}>
          <Typography variant="h4">{payload.data.title}</Typography>
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
