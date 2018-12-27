import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
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
    textDecoration: 'none',
  },
};

const UnstyledLinkButton = ({ classes, ...rest }) => (
  <Button {...rest} className={classes.linkButton} />
);

const LinkButton = withStyles(styles)(UnstyledLinkButton);

const NavBar = () => (
  <Nav>
    <LinkButton component={Link} to="/">
      Home
    </LinkButton>
    <LinkButton component={Link} to="/counter">
      Counter
    </LinkButton>
    <LinkButton component={Link} to="/login">
      Login
    </LinkButton>
  </Nav>
);

const Main = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/counter" exact component={Counter} />
    <Route component={NoMatch} />
  </Switch>
);

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Main />
    </div>
  </Router>
);

export default App;
