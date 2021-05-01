import React from 'react';
import Layout from './shared/Layout';
import Project from './Project';
import groupBy from '../helpers/groupBy';
import insertEveryN from '../helpers/insertEveryN';

import projects from '../data/projects.json';
import Tabs from './shared/Tabs';

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

        <Tabs titles={["Personal Projects", "Work Projects", "Future Projects"]}>
          <div id="projects-row" className="row">
            {/* TODO figure out how to assign each element a key?? */}
            {insertEveryN(
              personalProjects.map(project => <Project {...project} />),
              <div className="clearfix visible-md-block" />,
              3,
              3,
              true
            )}
          </div>

          <div id="projects-row" className="row">
            {insertEveryN(
              workProjects.map(project => <Project {...project} />),
              <div className="clearfix visible-md-block" />,
              3,
              3,
              true
            )}
          </div>

          <>
            <div className="page-header">
              <h3>Software of interest</h3>
              <p className="subtext">Some technologies that I am currently learning, or wanting to explore:</p>
            </div>
            <div className="well">
              <ul>
                <li><b>Amazon Web Services</b></li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Jenkins</li>
                <li>Spinnaker</li>
                <li>Terraform</li>
                <li>Ansible</li>
                <li>Go</li>
              </ul>
            </div>
          </>
        </Tabs>
      </div>
    </Layout>
  )
};

export default Projects;
