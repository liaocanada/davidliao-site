import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from './shared/Layout';
import Spacer from './shared/components/Spacer';

const Contact = () => (
  <Layout>
    <div className="page-header">
      <h1>
        Contact Me <small>Contact info and other links</small>
      </h1>
    </div>

    <div className="well">
      <h3>Contact info</h3>
      <p><FontAwesomeIcon icon="at" />&nbsp;contact@davidliao.ca</p>
      <p><FontAwesomeIcon icon="mobile-alt" />&nbsp;(613) 600-8621</p>

      <h3>LinkedIn</h3>
      <FontAwesomeIcon icon={["fab", "linkedin"]} />&nbsp;
      <a className="link-dark-yellow" href="https://linkedin.com/in/david-liao/">
        https://linkedin.com/in/david-liao/
        </a>

      <h3>GitHub</h3>
      <FontAwesomeIcon icon={["fab", "github-square"]} />&nbsp;
      <a className="link-dark-yellow" href="https://github.com/liaocanada">
        https://github.com/liaocanada
        </a>

      <h3>Youtube</h3>
      <FontAwesomeIcon icon={["fab", "youtube"]} />&nbsp;
      <a className="link-dark-yellow" href="https://www.youtube.com/channel/UC2oFv0jOfzWRIbMToxAXmyw">
        https://www.youtube.com/channel/UC2oFv0jOfzWRIbMToxAXmyw
        </a>
    </div>

    <Spacer height="100px" />
  </Layout>
);

export default Contact;
