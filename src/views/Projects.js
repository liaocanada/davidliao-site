import React from 'react';
import Layout from './shared/components/Layout';

const Projects = () => (
  <Layout>
    <div className="layout">

      <div className="page-header">
        <h1>
          Projects <small>A listing of my completed and WIP projects</small>
        </h1>
      </div>

      <h3>Personal Projects</h3>
      <div id="projects-row" className="row">
        <th:block th:each="project, iStat: ${ personalProjects }">
          <div className="col-md-4 thumbnail-wrapper">

            <div className="thumbnail">
              <img th:src="${ project.image }" alt="Project Image">
                <div className="caption">
                  <a th:href="@{ ${ project.url }}">
                    <h3 th:text="${ project.name }">
                      Project title goes here
              </h3>
                  </a>
                  <p th:utext="${ project.description }">Project description goes here</p>
                  <p>
                    <th:block th:each="skill: ${ project.skills }">
                      <a href="#">
                        <span id="skill-tag"
                          className="label"
                          th:classappend="${ skill.bsTagClass }"
                          th:text="${ skill.name }">
                        </span>
                      </a>
                    </th:block>
                  </p>
                </div>
        </div>

            </div>

            <div th:if="${iStat.index % 3 == 2}" className="clearfix visible-md-block"></div>
    </th:block>
  </div>

        <h3>Work Projects</h3>
        <div id="projects-row" className="row">
          <th:block th:each="project, iStat: ${ workProjects }">
            <div className="col-md-4 thumbnail-wrapper">

              <div className="thumbnail">
                <img th:src="${ project.image }" alt="Project Image">
                  <div className="caption">
                    <a th:href="@{ ${ project.url }}">
                      <h3 th:text="${ project.name }">
                        Project title goes here
              </h3>
                    </a>
                    <p th:utext="${ project.description }">Project description goes here</p>
                    <p>
                      <th:block th:each="skill: ${ project.skills }">
                        <a href="#">
                          <span id="skill-tag"
                            className="label"
                            th:classappend="${ skill.bsTagClass }"
                            th:text="${ skill.name }">
                          </span>
                        </a>
                      </th:block>
                    </p>
                  </div>
        </div>

              </div>

              <div th:if="${iStat.index % 3 == 2}" className="clearfix visible-md-block"></div>
    </th:block>
  </div>

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

        <div th:replace="fragments/footer :: copyright"></div>
  </Layout>
);

export default Projects;
