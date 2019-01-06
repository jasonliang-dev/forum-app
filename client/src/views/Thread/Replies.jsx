import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Reply from './Reply';

const styles = theme => ({
  replyHeader: {
    marginBottom: theme.spacing.unit * 2,
  },
});

const Replies = ({ classes, replyData }) => (
  <>
    <Typography variant="h6" className={classes.replyHeader}>
      Replies
    </Typography>
    {replyData.length ? (
      replyData.map(({ _id, body, user, created }) => (
        <Reply key={_id} username={user.username} created={created}>
          {body}
        </Reply>
      ))
    ) : (
      <Typography variant="caption">
        No comments in this thread. Be the first!
      </Typography>
    )}
  </>
);

export default withStyles(styles)(Replies);
