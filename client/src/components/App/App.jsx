import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import OldApp from '../OldApp/App';
import NoMatch from '../404/404';

const About = () => (
  <div>
    <h1>About Page</h1>
  </div>
);

const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={OldApp} />
        <Route path="/about" exact component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
