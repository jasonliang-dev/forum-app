import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: 10,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
};

const Nav = ({ children, classes }) => (
  <div className={classes.grow}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Home
        </Typography>
        {children.map(child => (
          <Button color="inherit" className={classes.button}>
            {React.cloneElement(child, { className: classes.link })}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  </div>
);

Nav.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default withStyles(styles)(Nav);
