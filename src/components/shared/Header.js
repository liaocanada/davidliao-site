import React from 'react';
import { Link } from 'react-router-dom';
import Spacer from './components/Spacer';

// TODO fix collapsible -- Bootstrap JS incompatible with React
const Header = () => (
  <>
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-collapse"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">Home</Link>
        </div>

        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav navbar-right nav">
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/achievements">Achievements</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    <Spacer height="62px" />
  </>
);

export default Header;
