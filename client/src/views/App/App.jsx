import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Nav from '../../components/Nav/Nav';
import Home from '../Home/Home';
import Counter from '../Counter/App';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NoMatch from '../NoMatch/NoMatch';

const styles = {
  main: {
    margin: '0 auto',
    maxWidth: 900,
  },
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
    <Button component={Link} to="/register" className={classes.linkButton}>
      Register
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
    <Route path="/register" exact component={Register} />
    <Route path="/login" exact component={Login} />
    <Route component={NoMatch} />
  </Switch>
);

const App = ({ classes }) => (
  <Router>
    <div>
      <CssBaseline />
      <NavBar classes={classes} />
      <div className={classes.main}>
        <Main />
      </div>
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
