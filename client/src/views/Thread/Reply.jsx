import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import UserMessage from './UserMessage';

const styles = theme => ({
  root: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  grow: {
    flexGrow: 1,
  },
  hidden: {
    visibility: 'hidden',
  },
});

class Reply extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      showMenuButton: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  handleMouseEnter() {
    this.setState({ showMenuButton: true });
  }

  handleMouseLeave() {
    this.setState({ showMenuButton: false });
  }

  render() {
    const { classes, username, created, children } = this.props;
    const { anchorEl, showMenuButton } = this.state;
    const open = Boolean(anchorEl);

    return (
      <Grid
        container
        wrap="nowrap"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={classes.root}
      >
        <Grid item className={classes.grow}>
          <UserMessage
            username={username}
            created={created}
            className={classes.replyMessage}
          >
            {children}
          </UserMessage>
        </Grid>
        <Grid item className={showMenuButton ? '' : classes.hidden}>
          <IconButton
            aria-label="More"
            aria-owns={open ? 'long-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Edit</MenuItem>
            <MenuItem onClick={this.handleClose}>Delete</MenuItem>
          </Menu>
        </Grid>
      </Grid>
    );
  }
}

Reply.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default withStyles(styles)(Reply);
