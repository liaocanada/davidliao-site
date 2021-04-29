import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// Pages
import Home from './Home';
import About from './About';
import Achievements from './Achievements';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={["/", "/home"]}><Home /></Route>
      <Route exact path="/about"><About /></Route>
      <Route exact path="/achievements"><Achievements /></Route>
      <Route exact path="/contact"><Contact /></Route>
      <Route exact path="/projects"><Projects /></Route>
      <Route exact path="/resume"><Resume /></Route>
    </Switch>
  </Router>
);

export default App;
