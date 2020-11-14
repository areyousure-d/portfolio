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

      <div className="project-list__image">
        <img 
          src={image}
          alt=""
        />
      </div>

      <div className="details">
        <h3 className="name mb">{ name }</h3>
        <p className="description mb">{ description }</p>
        <p className="tech-title">Использованные технологии</p>
        <ul className="technologies">
          { technologies.map((item) => <li key={item.id}>{ item.name }</li>)}
        </ul>
      </div>

      <div className="links">
        <a href={github} target="_blank" rel="noreferrer">github</a>
        <a href={demo} target="_blank" rel="noreferrer">demo</a>
      </div>

    </li>
  );
};

export default ProjectListItem;

