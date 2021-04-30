import React from 'react';
import ReactMarkdown from 'react-markdown';

import allSkillsData from '../data/skills.json';

const Project = ({ name, description, image, skills, url }) => {

  return (
    <div className="col-md-4 thumbnail-wrapper">
      <div className="thumbnail">
        <img src={image} alt="Project Image" />

        <div className="caption">
          <a href={url}><h3>{name}</h3></a>

          <ReactMarkdown>{description}</ReactMarkdown>

          <p style={{wordBreak: "break-all"}}>
            {skills.map(skill => (
              <a key={skill} href="#">
                <span id="skill-tag" className={`label ${allSkillsData[skill].bootstrapClassName}`}>{skill}</span>
              </a>
            ))}
          </p>
        </div>
      </div>
    </div>
  )
};

export default Project;
