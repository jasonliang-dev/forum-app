import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import compose from 'ramda/src/compose';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { connectFetcher } from '../../actions/fetchActions';
import environment from '../../environment';
import ThreadReplyForm from './ThreadReplyForm';
import { inspect } from '../../utils';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  inline: {
    display: 'inline',
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
    margin: `${theme.spacing.unit * 2}px 0`,
  },
  replyHeader: {
    marginBottom: theme.spacing.unit * 2,
  },
  messageUsername: {
    marginRight: theme.spacing.unit,
    display: 'inline',
  },
});

const UnstyledUserMessage = ({
  classes,
  username,
  children,
  created,
  ...rest
}) => (
  <div {...rest}>
    <Grid container>
      <Grid item>
        <Avatar className={classes.icon}>{username[0]}</Avatar>
      </Grid>
      <Grid item>
        <Typography variant="body2" className={classes.messageUsername}>
          {username}
        </Typography>
        <Typography variant="caption" className={classes.inline}>
          posted {moment(created).fromNow()}
        </Typography>
        <Typography variant="body1">{children}</Typography>
      </Grid>
    </Grid>
  </div>
);

const UserMessage = withStyles(styles)(UnstyledUserMessage);

export class DisconnectedThread extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { fetchData, match } = this.props;
    fetchData(`${environment.endpoint}/threads/${match.params.id}`);
  }

  handleSubmit(values) {
    const { match } = this.props;
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
      .then(inspect)
      .catch(inspect);
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

    const { title, owner, body, created, replies } = payload.data;

    return (
      <div className={classes.root}>
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
                <div key={_id}>
                  <Divider />
                  <UserMessage
                    username={user.username}
                    created={replyCreated}
                    className={classes.reply}
                  >
                    {replyBody}
                  </UserMessage>
                </div>
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
