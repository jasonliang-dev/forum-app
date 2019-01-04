import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import compose from 'ramda/src/compose';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connectFetcher } from '../../actions/fetchActions';
import ThreadReplyForm from './ThreadReplyForm';
import DeleteDialog from './DeleteDialog';
import UserMessage from './UserMessage';
import { addReply, resetState, openDialog, closeDialog } from './ThreadActions';
import environment from '../../environment';
import { inspect } from '../../utils';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4,
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
  reply: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  replyHeader: {
    marginBottom: theme.spacing.unit * 2,
  },
});

const mapStateToProps = state => ({ ...state.currentThread });

const mapDispatchToProps = dispatch => ({
  addToReplyList: reply => dispatch(addReply(reply)),
  resetThreadState: () => dispatch(resetState()),
  openDialogBox: () => dispatch(openDialog()),
  closeDialogBox: () => dispatch(closeDialog()),
});

export class DisconnectedThread extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { fetchData, resetThreadState, match } = this.props;
    resetThreadState();
    fetchData(`${environment.endpoint}/threads/${match.params.id}`);
  }

  handleSubmit(values) {
    const { addToReplyList, match } = this.props;
    const data = {
      ...values,
      threadId: match.params.id,
    };
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('id_token')}` },
    };
    axios
      .post(`${environment.endpoint}/replies`, data, config)
      .then(response => response.data.data[1])
      .then(addToReplyList)
      .catch(inspect);
  }

  handleDelete() {
    const { match, history, closeDialogBox } = this.props;
    closeDialogBox();
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('id_token')}` },
    };
    axios
      .delete(`${environment.endpoint}/threads/${match.params.id}`, config)
      .then(() => history.push('/'))
      .catch(inspect);
  }

  render() {
    const {
      classes,
      additionalReplies,
      deleteDialogOpenState,
      data: payload,
      errorOccurred,
      openDialogBox,
      closeDialogBox,
    } = this.props;

    if (errorOccurred)
      return (
        <Typography variant="h4" className={classes.root}>
          Error fetching thread. Try again later.
        </Typography>
      );

    if (!payload || !payload.data)
      return <CircularProgress className={classes.loadingSpinner} />;

    const { title, owner, body, created, replies: dataReplies } = payload.data;

    const replies = [...dataReplies, ...additionalReplies];

    return (
      <div className={classes.root}>
        <Fab
          color="primary"
          aria-label="Remove"
          disabled={localStorage.getItem('id') !== owner._id}
          className={classes.fab}
          onClick={openDialogBox}
        >
          <DeleteIcon />
        </Fab>
        <DeleteDialog
          openState={deleteDialogOpenState}
          close={closeDialogBox}
          onDelete={this.handleDelete}
        />
        <Typography variant="h4" gutterBottom component="h2">
          {title}
        </Typography>
        <Paper className={classes.paper}>
          <UserMessage username={owner.username} created={created}>
            {body}
          </UserMessage>
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.replyHeader}>
            Replies
          </Typography>
          {replies.length ? (
            replies.map(
              ({ _id, body: replyBody, created: replyCreated, user }) => (
                <UserMessage
                  key={_id}
                  username={user.username}
                  created={replyCreated}
                  className={classes.reply}
                >
                  {replyBody}
                </UserMessage>
              ),
            )
          ) : (
            <Typography variant="caption">
              No comments in this thread. Be the first!
            </Typography>
          )}
        </Paper>
        <Paper className={classes.paper}>
          <ThreadReplyForm onSubmit={this.handleSubmit} />
        </Paper>
      </div>
    );
  }
}

DisconnectedThread.propTypes = {
  // react router
  history: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
  // jss
  classes: PropTypes.shape({}).isRequired,
  // dispatch actions
  addToReplyList: PropTypes.func.isRequired,
  resetThreadState: PropTypes.func.isRequired,
  openDialogBox: PropTypes.func.isRequired,
  closeDialogBox: PropTypes.func.isRequired,
  // state
  additionalReplies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  deleteDialogOpenState: PropTypes.bool.isRequired,
  fetchData: PropTypes.func.isRequired,
  data: PropTypes.shape({}),
  errorOccurred: PropTypes.bool,
};

DisconnectedThread.defaultProps = {
  data: undefined,
  errorOccurred: false,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  connectFetcher('thread'),
  withRouter,
  withStyles(styles),
)(DisconnectedThread);
