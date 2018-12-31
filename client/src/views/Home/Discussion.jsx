import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ChatIcon from '@material-ui/icons/Chat';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import EyeIcon from '@material-ui/icons/RemoveRedEye';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  card: {
    margin: `${theme.spacing.unit}px 0`,
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  grow: {
    flexGrow: 1,
  },
  counts: {
    textAlign: 'right',
  },
});

const Discussion = ({ title, user, views, replyCount, classes, to }) => (
  <Card className={classes.card}>
    <CardActionArea component={Link} to={to}>
      <CardContent>
        <Grid container>
          <Grid item>
            <Avatar className={classes.icon}>
              <ChatIcon />
            </Avatar>
          </Grid>
          <Grid item className={classes.grow}>
            <Typography variant="body1">{title}</Typography>
            <Typography variant="body2">by {user}</Typography>
          </Grid>
          <Grid item className={classes.counts}>
            <Typography variant="caption">
              {views} <EyeIcon fontSize="inherit" />
            </Typography>
            <Typography variant="caption">
              {replyCount} <ChatBubbleIcon fontSize="inherit" />
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </CardActionArea>
  </Card>
);

Discussion.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  classes: PropTypes.shape({}).isRequired,
  to: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  replyCount: PropTypes.number.isRequired,
};

export default withStyles(styles)(Discussion);
