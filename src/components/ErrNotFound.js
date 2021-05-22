import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from './shared/Layout';
import Spacer from './shared/Spacer';
import { Link } from 'react-router-dom';

const ErrNotFound = () => (
  <Layout>
    <h1 className="page-header">Uh oh...</h1>

    <div className="alert alert-warning" role="alert">
      <h4><FontAwesomeIcon icon="exclamation-triangle" /> Page not found</h4>
        The page you are looking doesn't seem to exist. If you've found a dead link, please let me know&nbsp;
      <Link to="/contact" className="alert-link">here</Link>!
    </div>

    <Spacer height="300px" />
  </Layout>
);

export default ErrNotFound;
