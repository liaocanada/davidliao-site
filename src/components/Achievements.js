import React from 'react';
import Layout from './shared/Layout';

const Achievements = () => (
  <Layout>
    <div className="layout">

      <div className="page-header">
        <h1>
          Achievements <small>Awards, certifications, and education</small>
        </h1>
      </div>

      <h3>Certifications</h3>

      <div className="row media-row">
        <div className="col-sm-3 h-center-children">
          <img className="media-image"
            src="/images/achievements/aws-certified-solutions-architect-associate.png"
            alt="AWS Solutions Architect Associate Logo"
          />
        </div>
        <div className="col-sm-9">
          <h4>AWS Certified Solutions Architect - Associate</h4>
    Proves knowledge of:
    <ul>
            <li>Comprehensive understanding of AWS services</li>
            <li>Building secure and robust solutions</li>
            <li>AWS Cloud architectural principles</li>
            <li>Designing well-architected systems which are scalable, resilient, efficient, and fault-tolerant</li>
          </ul>
        </div>
      </div>

      <div className="row media-row">
        <div className="col-sm-3 h-center-children">
          <img className="media-image"
            src="/images/achievements/aws-certified-cloud-practitioner.png"
            alt="AWS Cloud Practitioner Logo"
          />
        </div>
        <div className="col-sm-9">
          <h4>AWS Certified Cloud Practitioner</h4>
    Proves knowledge of:
    <ul>
            <li>Cloud computing and the AWS global infrastructure</li>
            <li>Key services on the AWS platform</li>
            <li>AWS Cloud architectural principles</li>
            <li>Security and compliance aspects of the AWS platform and the shared security model</li>
          </ul>
        </div>
      </div>

      <div className="row media-row">
        <div className="col-sm-3 h-center-children">
          <img className="media-image-border"
            src="/images/achievements/OCP.bmp"
            alt="OCP Logo"
          />
        </div>
        <div className="col-sm-9">
          <h4>OCP - Oracle Certified Professional</h4>
    Includes topics such as:
    <ul>
            <li>Lambdas</li>
            <li>Stream API</li>
            <li>Advanced Java Class Design</li>
            <li>Collections and Generics</li>
            <li>Java Database Connectivity (JDBC)</li>
            <li>IO, NIO.2, and Serialization</li>
          </ul>
        </div>
      </div>


      <div className="row media-row">
        <div className="col-sm-3 h-center-children">
          <img className="media-image-border"
            src="/images/achievements/OCA.bmp"
            alt="OCA Logo"
          />
        </div>
        <div className="col-sm-9">
          <h4>OCA - Oracle Certified Associate</h4>
    Includes topics such as:
    <ul>
            <li>Data Types</li>
            <li>Object-Oriented Programming Principles</li>
            <li>Strings</li>
            <li>Handling exceptions</li>
          </ul>
        </div>
      </div>

      <h3>Education</h3>
      <div className="row media-row">
        <div className="col-sm-3 h-center-children">
          <img className="media-image-border"
            src="/images/achievements/carleton.jpg"
            alt="Carleton Picture"
          />
        </div>
        <div className="col-sm-9">
          <h4>Bachelor's degree in Computer Science, Carleton University (currently enrolled)</h4>
          <ul>
            <li>GPA: 11.9, Major GPA: 12.0 (out of 12.0)</li>
            <li>Specialization in Computer and Internet Security</li>
            <li>Expected Graduation: April 2023</li>
          </ul>
        </div>
      </div>

    </div>
  </Layout>
);

export default Achievements;
