import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// Pages
import Home from './Home';
import About from './About';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={["/", "/home"]}><Home /></Route>
      <Route exact path="/about"><About /></Route>
      <Route exact path="/achievements"><Home /></Route>
      <Route exact path="/contact"><Home /></Route>
      <Route exact path="/projects"><Home /></Route>
      <Route exact path="/resume"><Home /></Route>
    </Switch>
  </Router>
);

export default App;
