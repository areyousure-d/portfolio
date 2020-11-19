import React from 'react';

import styles from './skill-item.module.css';

const SkillItem = ({ title }) => {
  return (
    <li className={styles['skill-item']}>
      { title }
    </li>
  );
};

export default SkillItem;

