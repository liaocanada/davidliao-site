import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import allSkillsData from '../data/skills.json';

const Project = ({ name, description, image, skills, url, companyName, companyUrl }) => {
  return (
    <div className="col-md-4 thumbnail-wrapper">
      <div className="thumbnail">
        <img src={image} alt="Project Image" />

        <div className="caption">
          {url ?
            <h3><a href={url}>
              {name}
              {url && <>&nbsp;&nbsp;<FontAwesomeIcon icon="external-link-alt" size="xs" /></>}
            </a></h3> :
            <h3 className="text-primary">{name}</h3>
          }
          {companyName && companyUrl &&
            <a href={companyUrl}>
              <h5><i>{companyName}</i></h5>
            </a>
          }
          {companyName && !companyUrl &&
              <h5><i>{companyName}</i></h5>
          }

          <ReactMarkdown>{description}</ReactMarkdown>

          <p style={{ wordBreak: "break-all" }}>
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
