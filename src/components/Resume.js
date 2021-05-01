import React from 'react';
import Header from './shared/Header';

const Resume = () => (
  <>
    <Header />
    <div className="layers-container">
      <div className="front-layer">
        <embed src="/DavidLiao-Resume.pdf#toolbar=0" />
      </div>

      <div className="back-layer alert alert-warning alert-dismissible" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        Uh oh! If you see this then the iframe didn't load. Try visiting&nbsp;
        <a href="https://resume.davidliao.ca">resume.davidliao.ca</a>&nbsp;
        instead.
      </div>
    </div>
  </>
);

export default Resume;
