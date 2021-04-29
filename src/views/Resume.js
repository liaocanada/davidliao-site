import React from 'react';
import Layout from './shared/components/Layout';

const Resume = () => (
  <Layout>
    <div className="layers-container" style="height: 90%;">
      <div className="front-layer" style="height: 100%;">
        <iframe
          src="https://docs.google.com/gview?url=https://github.com/liaocanada/davidliao-site/raw/master/github-static/DavidLiao-Resume.pdf&embedded=true"
          style="width: 100%; height: 100%;"></iframe>
      </div>

      <div className="back-layer alert alert-warning alert-dismissible" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
			Uh oh! If you see this then the iframe didn't load. Try visiting
			<a href="https://resume.davidliao.ca">resume.davidliao.ca</a>
			instead.
		</div>
    </div>
  </Layout>
);

export default Resume;
