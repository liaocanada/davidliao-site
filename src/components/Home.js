import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BannerImageOverlay from './shared/BannerImageOverlay';
import TextBox from './shared/TextBox';
import Layout from './shared/Layout';

const Home = () => (
  <Layout noPadding>
    <BannerImageOverlay image={{
        src: "/images/home.jpg",
        alt: "A background photo of a building and waterfall in Carleton Place, ON"
      }}
      overlay={<>
        <h1>DAVID LIAO</h1>
        <h4>AWS Certified Solutions Architect</h4>
        <Link className="btn btn-primary btn-block" to="/resume" role="button">
          View Resume&ensp;<FontAwesomeIcon icon="arrow-right" />
        </Link>
      </>}
      caption="Landscape of Town Hall behind Mississippi River in Carleton Place, ON." />

    <div id="home-textbox-container" className="row row-eq-height">
      <TextBox title="Background"
        contents={
          <>
            <h4 className="subheader">Certifications</h4>
            <ul>
              <li><b>AWS</b> Certified Solutions Architect - Associate (2020)</li>
              <li><b>AWS</b> Certified Cloud Practitioner (2019)</li>
              <li><b>Java 8</b> Oracle Certified Professional (2019)</li>
              <li><b>Java 8</b> Oracle Certified Associate (2017)</li>
            </ul>

            <h4 className="subheader">Education</h4>
            <ul>
              <li>Carleton University, Bachelor of Computer Science
              <ul>
                  <li>11.9 GPA, 12.0 Major GPA</li>
                  <li>4th Year Standing</li>
                  <li>Computer and Internet Security Stream</li>
                </ul>
              </li>
            </ul>

            <h4 className="subheader">Involvement</h4>
            <ul>
              <li>AWS Educate Student Ambassador</li>
              <li>Mentor at the Science Student Success Center</li>
              <li>Teaching Assistant</li>
            </ul>
          </>
        }
        button={
          <Link id="btn-home" className="btn btn-primary btn-block" to="/achievements" role="button">
            More Info
          </Link>
        } />

      <TextBox title="Projects"
        contents={
          <>
            <h4 className="subheader">Work Projects</h4>
            <ul>
              <li><b>Qlik -</b> Development of a custom load balancing service</li>
              <li><b>Coveo -</b> Scaling and cost management of an ECS cluster</li>
              <li><b>NewPush -</b> REST APIs, Identity and Access Management analysis</li>
              <li><b>LaunchFort -</b> App for displaying specials at nearby bars</li>
              <li><b>New Portal Corp -</b> An employee management system</li>
            </ul>

            <h4 className="subheader">Web Apps - Personal</h4>
            <ul>
              <li>Personal Website (this site!)</li>
              <li>
                Online Bookstore&nbsp;&nbsp;
                <a className="link-yellow" href="https://ebookstore.davidliao.ca/" target="_blank">
                  <FontAwesomeIcon icon="external-link-alt" />
                </a>
              </li>
              <li>
                CareerCounsel&nbsp;&nbsp;
                <a className="link-yellow" href="https://app.davidliao.ca" target="_blank">
                  <FontAwesomeIcon icon="external-link-alt" />
                </a>
              </li>
            </ul>

            <h4 className="subheader">Other Projects</h4>
            <ul>
              <li>Various desktop apps</li>
              <li>Various Android, iOS apps</li>
              <li>Various Arduino projects</li>
            </ul>
          </>
        }
        button={
          <Link id="btn-home" className="btn btn-primary btn-block" to="/projects" role="button">
            More Info
          </Link>
        } />
    </div>
  </Layout>
);

export default Home;
