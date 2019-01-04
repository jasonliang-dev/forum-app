import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import UserMessage from './UserMessage';

const styles = theme => ({
  replyHeader: {
    marginBottom: theme.spacing.unit * 2,
  },
  replyMessage: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
});

const Replies = ({ classes, replyData }) => (
  <>
    <Typography variant="h6" className={classes.replyHeader}>
      Replies
    </Typography>
    {replyData.length ? (
      replyData.map(({ _id, body: replyBody, created: replyCreated, user }) => (
        <UserMessage
          key={_id}
          username={user.username}
          created={replyCreated}
          className={classes.replyMessage}
        >
          {replyBody}
        </UserMessage>
      ))
    ) : (
      <Typography variant="caption">
        No comments in this thread. Be the first!
      </Typography>
    )}
  </>
);

export default withStyles(styles)(Replies);
