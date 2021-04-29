import React from 'react';
import Layout from './shared/components/Layout';
import Project from './Project';
import groupBy from '../helpers/groupBy';

import projects from '../data/projects.json';

const Projects = () => {
  const { work: workProjects, personal: personalProjects } = groupBy(projects, "type");

  return (
    <Layout>
      <div className="layout">

        <div className="page-header">
          <h1>
            Projects <small>A listing of my completed and WIP projects</small>
          </h1>
        </div>

        <h3>Personal Projects</h3>
        <div id="projects-row" className="row">
          {personalProjects.map(project => <Project {...project} />)}
        </div>
        {/* <div th:if="${iStat.index % 3 == 2}" className="clearfix visible-md-block"></div> */}

        <h3>Work Projects</h3>
        <div id="projects-row" className="row">
          {workProjects.map(project => <Project {...project} />)}
        </div>
        {/* <div th:if="${iStat.index % 3 == 2}" className="clearfix visible-md-block"></div> */}

        <div className="page-header">
          <h3>Software of interest</h3>
          <p className="subtext">Some technologies that I am currently learning, or wanting to explore:</p>
        </div>
        <div className="well">
          <ul>
            <li><b>Amazon Web Services</b>: Going for Solutions Architect Associate this summer!</li>
            <li>Docker/Kubernetes</li>
            <li>Jenkins</li>
            <li>Ansible</li>
            <li>Terraform</li>
            <li>Go</li>
            <li>Ruby/Ruby on Rails</li>
          </ul>
        </div>

      </div>
    </Layout>
  )
};

export default Projects;
