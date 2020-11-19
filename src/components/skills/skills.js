import React, { useEffect, useState } from 'react';
import SkillItem from '../skill-item';

import styles from './skills.module.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(process.env.PUBLIC_URL + '/projects.json')
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setSkills(data.skills);
      })
      .catch((err) => setError(err));
  }, []);

  if (loading ) {
    return (
      <div className={styles.skills}>
        <div className="wrapper">
          <h3 className="loading">Загрузка...</h3>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.skills}>
        <div className="wrapper">
          <h3 className="error">Ошибка</h3>
        </div>
      </div>
    );
  }

  const list = skills.map((skill) => {
    return <SkillItem key={skill.id} title={skill.name} />
  });

  return (
    <div className={styles.skills}>
      <div className="wrapper">
        <h2 className={styles.title}>My Skills</h2>
        <ul className={styles.list}>
          { list }
        </ul>
      </div>
    </div>
  );
};

export default Skills;

