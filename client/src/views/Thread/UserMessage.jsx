import React from 'react';
import moment from 'moment';
import uuidv1 from 'uuid/v1';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  inline: {
    display: 'inline',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  messageUsername: {
    marginRight: theme.spacing.unit,
    display: 'inline',
  },
});

const UserMessage = ({ classes, username, children, created, ...rest }) => (
  <div {...rest}>
    <Grid container wrap="nowrap">
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
        <Typography variant="body1">
          {children.split('\n').map(paragraph => (
            <React.Fragment key={uuidv1()}>
              {paragraph}
              <br />
            </React.Fragment>
          ))}
        </Typography>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(UserMessage);
