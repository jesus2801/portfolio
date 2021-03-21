import React from 'react';

import Styles from '../../styles/layout/home/Projects';

const Projects = () => {
  return (
    <Styles.MainGrid>
      <Styles.TitleCtn>
        <div>
          <h2>project list</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </Styles.TitleCtn>
      <div className="card-ctn">
        <div className="card"></div>
      </div>
      <div className="card-ctn">
        <div className="card"></div>
      </div>
      <div className="card-ctn">
        <div className="card"></div>
      </div>
      <div className="card-ctn">
        <div className="card"></div>
      </div>
    </Styles.MainGrid>
  );
};

export default Projects;
