import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Counter from '../Counter/App';
import NoMatch from '../NoMatch/NoMatch';

const App = () => (
  <Router>
    <div>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/login">Login</Link>
      </Nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/counter" exact component={Counter} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
