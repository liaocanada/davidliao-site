import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import capitalize from '../helpers/capitalize';

// Pages
import Home from './Home';
import About from './About';
import Achievements from './Achievements';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

const updatePageTitle = pageName =>
  document.title = !!pageName ? `${capitalize(pageName)} | David Liao` : "David Liao";

const updateHitCount = pageName => {
  // TODO
};

const App = () => {
  const location = useLocation();
  const page = location.pathname.split("/")[1];
  useEffect(() => {
    updatePageTitle(page);
    updateHitCount(page);
  }, [page]);

  return (
      <Switch>
        <Route exact path={["/", "/home"]}><Home /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/achievements"><Achievements /></Route>
        <Route exact path="/contact"><Contact /></Route>
        <Route exact path="/projects"><Projects /></Route>
        <Route exact path="/resume"><Resume /></Route>
      </Switch>
  )
};

export default App;
