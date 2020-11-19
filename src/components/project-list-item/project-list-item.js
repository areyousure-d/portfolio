import React from 'react';

import './project-list-item.css';

const ProjectListItem = ({ project }) => {
  const { 
    name, 
    description, 
    demo, 
    github, 
    image, 
    technologies 
  } = project;

  return (
    <li className="project-list-item">

      <div className="details">
        <h3 className="name mb">
          <a href={demo} target="_blank" rel="noreferrer">{ name }</a>
        </h3>
        <p className="description mb">
          { description } 
        </p>
        <p className="technologies">
          {  technologies.map((item) => item.name + ' ') }
        </p>
      </div>

      <div className="links">
        <a href={github} target="_blank" rel="noreferrer">Github</a>
        <a href={demo} target="_blank" rel="noreferrer">Посмотреть</a>
      </div>

    </li>
  );
};

export default ProjectListItem;

