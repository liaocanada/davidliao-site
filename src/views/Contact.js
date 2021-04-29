import React from 'react';
import Layout from './shared/components/Layout';

const Contact = () => (
  <Layout>
    <div th:replace="fragments/header :: navbar"></div>

    <div className="layout">

      <div className="page-header">
        <h1>
          Contact Me <small>Contact info and other links</small>
        </h1>
      </div>

      <div className="well">

        <h3>Contact info</h3>
        <p><i className="fas fa-at"></i> contact@davidliao.ca</p>
        <p><i className="fas fa-mobile-alt"></i> (613) 600-8621</p>

        <h3>LinkedIn</h3>
        <i className="fab fa-linkedin"></i>
        <a className="link-dark-yellow" th:href="@{https://linkedin.com/in/david-liao/}">
          https://linkedin.com/in/david-liao/
    </a>

        <h3>GitHub</h3>
        <i className="fab fa-github-square"></i>
        <a className="link-dark-yellow" th:href="@{https://github.com/liaocanada}">
          https://github.com/liaocanada
    </a>

        <h3>Youtube</h3>
        <i className="fab fa-youtube"></i>
        <a className="link-dark-yellow" th:href="@{https://www.youtube.com/channel/UC2oFv0jOfzWRIbMToxAXmyw}">
          https://www.youtube.com/channel/UC2oFv0jOfzWRIbMToxAXmyw
    </a>
      </div>

    </div>

    <div style="height: 100px"></div>
  </Layout>
);

export default Contact;
