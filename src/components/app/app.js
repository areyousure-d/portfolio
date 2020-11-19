import React from 'react';

import ProjectList from '../project-list';
import About from '../about';
import Skills from '../skills';

import './app.css';

const App = () => {
  return (
    <div className="app">
      <About />
      <Skills />
      <ProjectList />
    </div>
  );
};

export default App;

