import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// Pages
import Home from './Home';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={["/", "/home"]}><Home /></Route>
    </Switch>
  </Router>
);

export default App;
