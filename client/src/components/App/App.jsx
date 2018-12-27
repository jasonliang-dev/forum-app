import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Counter from '../Counter/App';
import NoMatch from '../NoMatch/NoMatch';

const styles = {
  linkButton: {
    marginLeft: 10,
    color: 'inherit',
  },
};

const NavBar = ({ classes }) => (
  <Nav>
    <Button component={Link} to="/" className={classes.linkButton}>
      Home
    </Button>
    <Button component={Link} to="/counter" className={classes.linkButton}>
      Counter
    </Button>
    <Button component={Link} to="/login" className={classes.linkButton}>
      Login
    </Button>
  </Nav>
);

const Main = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/counter" exact component={Counter} />
    <Route component={NoMatch} />
  </Switch>
);

const App = ({ classes }) => (
  <Router>
    <div>
      <NavBar classes={classes} />
      <Main />
    </div>
  </Router>
);

NavBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

App.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(App);
