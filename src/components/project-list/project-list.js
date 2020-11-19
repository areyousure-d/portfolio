import React, { useEffect, useState } from 'react';

import ProjectListItem from '../project-list-item';

import styles from './project-list.module.css';

const ProjectList = () => {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(process.env.PUBLIC_URL + '/projects.json')
      .then((res) => res.json())
      .then((data) => { 
        const projects = data.projects.map((project) => {
          project.image = process.env.PUBLIC_URL + project.image;
          return project;
        });
        setProjects(projects)
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, []);


  if (loading) {
    return (
      <div className={styles['project-list']}>
        <div className="wrapper">
          <h3 className="loading">Загрузка...</h3>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles['project-list']}>
        <div className="wrapper">
          <h3 className="error">Ошибка</h3>
        </div>
      </div>
    );
  }


  const list = projects.map((project) => {
    return <ProjectListItem key={project.id} project={project} />
  });

  return (
    <div className={styles['project-list']}>
      <div className="wrapper">
        <h2 className={styles.title}>My Works</h2>
        <ul className={styles.list}>
          { list }
        </ul>
        </div>
    </div>
  );
};

export default ProjectList;

