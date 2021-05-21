import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faAt, faMobileAlt, faLink, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import capitalize from '../helpers/capitalize';

// Pages
import Home from './Home';
import About from './About';
import Achievements from './Achievements';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

// Adding fonts to library allows them to be used as strings from the FontAwesomeIcon component
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
library.add(fab, faArrowRight, faAt, faMobileAlt, faLink, faExternalLinkAlt);

const App = () => {
  const location = useLocation();
  const page = location.pathname.split("/")[1];
  const updatePageTitle = pageName =>
    document.title = !!pageName ? `${capitalize(pageName)} | David Liao` : "David Liao";

  useEffect(() => {
    updatePageTitle(page);
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
