import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import Nav from '../../components/Nav/Nav';

const styles = {
  linkButton: {
    marginLeft: 10,
  },
};

const UnstyledButtonLink = ({ classes, to, children, ...rest }) => (
  <Button component={Link} to={to} className={classes.linkButton} {...rest}>
    {children}
  </Button>
);

const ButtonLink = withStyles(styles)(UnstyledButtonLink);

const clearStorageAndReload = () => {
  localStorage.clear();
  window.location.reload();
};

const Navbar = ({ classes }) => (
  <Nav>
    <ButtonLink to="/">Home</ButtonLink>
    {localStorage.getItem('id_token') ? (
      <>
        <ButtonLink to="/profile">My Profile</ButtonLink>
        <Button
          variant="outlined"
          color="primary"
          onClick={clearStorageAndReload}
          className={classes.linkButton}
        >
          Logout
        </Button>
      </>
    ) : (
      <>
        <ButtonLink variant="outlined" to="/register">
          Register
        </ButtonLink>
        <ButtonLink variant="outlined" to="/login">
          Login
        </ButtonLink>
      </>
    )}
  </Nav>
);

Navbar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Navbar);
