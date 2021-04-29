import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './shared/components/Layout';

const Resume = () => (
  <Layout>
    <div class="layers-container" style="height: 90%;">
      <div class="front-layer" style="height: 100%;">
        <iframe
          src="https://docs.google.com/gview?url=https://github.com/liaocanada/davidliao-site/raw/master/github-static/DavidLiao-Resume.pdf&embedded=true"
          style="width: 100%; height: 100%;"></iframe>
        <!-- 	<embed src="https://github.com/liaocanada/davidliao-site/raw/master/github-static/DavidLiao-Resume.pdf"  -->
			<!-- 		width="100%"  -->
			<!-- 		height="90%" type="application/pdf" /> -->
		</div>

      <div class="back-layer alert alert-warning alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
			Uh oh! If you see this then the iframe didn't load. Try visiting
			<a th:href="@{https://resume.davidliao.ca}">resume.davidliao.ca</a>
			instead.
		</div>
    </div>
  </Layout>
);

export default Resume;
