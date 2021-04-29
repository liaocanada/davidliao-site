import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './shared/components/Layout';

const Home = () => (
  <Layout>
    <div id="banner">
      <img id="banner-image" src="/images/home.jpg"
        alt="A background photo of a building and waterfall in Carleton Place, ON"
      />
      <div id="banner-cover">
        <div id="banner-cover-contents">
          <h1>DAVID LIAO</h1>
          <h4>AWS Certified Solutions Architect</h4>
          <Link className="btn btn-primary btn-block" to="/resume" role="button">
            View Resume &ensp;
					<i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div id="banner-image-description" className="bottom-right">
        Landscape of Town Hall behind Mississippi River in Carleton Place, ON.
		</div>
    </div>

    <div id="home-textbox-container" className="row row-eq-height">

      <div id="home-textbox" className="col-sm-6">
        <table className="table">
          <tr><th><h3>BACKGROUND</h3></th></tr>
          <tr><td>
            <h4 className="subheader">Certifications</h4>
            <ul>
              <li><b>AWS</b> Certified Solutions Architect - Associate (2020)</li>
              <li><b>AWS</b> Certified Cloud Practitioner (2019)</li>
              <li><b>OCP</b> - Oracle Certified Professional Java SE 8 Programmer (2019)</li>
              <li><b>OCA</b> - Oracle Certified Associate Java SE 8 Programmer (2017)</li>

            </ul>

            <h4 className="subheader">Involvement</h4>
            <ul>
              <li>AWS Educate Student Ambassador</li>
              <li>Mentor at the Science Student Success Center</li>
              <li>Teaching Assistant</li>
            </ul>

            <h4 className="subheader">Education</h4>
            <ul>
              <li>Carleton University, Bachelor of Computer Science
							<ul>
                  <li>11.9 GPA, 12.0 Major GPA</li>
                  <li>Computer and Internet Security Stream</li>
                </ul>
              </li>
            </ul>
          </td></tr>
          <tr><td id="button-cell">
            <Link id="btn-home" className="btn btn-primary btn-block"
              to="/achievements" role="button"> More Info
					</Link>
          </td></tr>
        </table>
      </div>

      <div id="home-textbox" className="col-sm-6">
        <table className="table">
          <tr><th><h3>PROJECTS</h3></th></tr>
          <tr><td>
            <h4 className="subheader">Web Apps (personal)</h4>
            <ul>
              <li>Personal Website (this site)</li>
              <li>E-Bookstore</li>
              <li>
                CareerCounsel: Generates statistics based on
                real-time job listings
						</li>
            </ul>

            <h4 className="subheader">Web Apps (work)</h4>
            <ul>
              <li>Human Resources Management System</li>
              <li>Featured Listings App</li>
            </ul>

            <h4 className="subheader">Other Projects</h4>
            <ul>
              <li>
                Flamingo travel planner: Suggests an itinerary based on
                users' budgets
						</li>
              <li>Various Android, iOS apps</li>
              <li>Various Arduino projects</li>
            </ul>

          </td></tr>
          <tr><td id="button-cell">
            <Link id="btn-home" className="btn btn-primary btn-block"
              to="/projects" role="button"> More Info
					</Link>
          </td></tr>
        </table>
      </div>
    </div>
  </Layout>
);

export default Home;
