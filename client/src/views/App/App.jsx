import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Nav from '../../components/Nav/Nav';
import Counter from '../Counter/Counter';
import Home from '../Home/Home';
import Login from '../Login/Login';
import NewThread from '../NewThread/NewThread';
import NoMatch from '../NoMatch/NoMatch';
import Register from '../Register/Register';

const styles = theme => ({
  main: {
    margin: '0 auto',
    maxWidth: 900,
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
  linkButton: {
    marginLeft: 10,
    color: 'inherit',
  },
});

const UnstyledButtonLink = ({ classes, to, children }) => (
  <Button component={Link} to={to} className={classes.linkButton}>
    {children}
  </Button>
);

const ButtonLink = withStyles(styles)(UnstyledButtonLink);

const NavBar = () => (
  <Nav>
    <ButtonLink to="/">Home</ButtonLink>
    <ButtonLink to="/counter">Counter</ButtonLink>
    <ButtonLink to="/register">Register</ButtonLink>
    <ButtonLink to="/login">Login</ButtonLink>
  </Nav>
);

const Main = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/counter" component={Counter} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/threads/create" component={NewThread} />
    <Route component={NoMatch} />
  </Switch>
);

const App = ({ classes }) => (
  <Router>
    <>
      <CssBaseline />
      <NavBar />
      <div className={classes.main}>
        <Main />
      </div>
    </>
  </Router>
);

UnstyledButtonLink.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

App.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(App);
