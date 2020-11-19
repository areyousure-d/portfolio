import React from 'react';
import clsx from 'clsx';

import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <div className="wrapper">
      <div className={styles.hello}>
        <p className={styles.name}>Dymbrylov Ayusha</p>
        <p className={styles.description}>Hello, I’m a Frontend Developer</p>
      </div>
      <div className={styles.info}>
        <div className={clsx(styles.info__item, styles.location)}>
          <span className={styles.label}>Location:</span> 
          <span>Irkutsk</span>
        </div>
        <div className={clsx(styles.info__item, styles.age)}>
          <span className={styles.label}>Age:</span> 
          <span>28</span>
        </div>
        <div className={clsx(styles.info__item, styles.email)}>
          <span className={styles.label}>Email:</span> 
          <span>areyousure92@mail.ru</span>
        </div>
        <div className={clsx(styles.info__item, styles.phone)}>
          <span className={styles.label}>Phone:</span> 
          <span>+7(924)-136-25-42</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;

