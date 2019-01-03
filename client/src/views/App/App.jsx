import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Navbar from './Navbar';
import Home from '../Home/Home';
import Login from '../Login/Login';
import NewThread from '../NewThread/NewThread';
import Thread from '../Thread/Thread';
import NoMatch from '../NoMatch/NoMatch';
import Register from '../Register/Register';

const styles = theme => ({
  main: {
    margin: '0 auto',
    marginBottom: theme.spacing.unit * 8,
    maxWidth: 900,
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});

const Main = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/thread/create" component={NewThread} />
    <Route path="/thread/:id" component={Thread} />
    <Route component={NoMatch} />
  </Switch>
);

const App = ({ classes }) => (
  <Router>
    <>
      <CssBaseline />
      <Navbar />
      <div className={classes.main}>
        <Main />
      </div>
    </>
  </Router>
);

App.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(App);
