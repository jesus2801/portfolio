import React from 'react';

import Styles from '../../styles/layout/home/Skills';

const Skills = () => {
  return (
    <>
      <Styles.Title>
        <h2 className="title">Skills</h2>
        <p>
          A synthesis of the main knowledge that I have and can contribute
          as a web developer.
        </p>
      </Styles.Title>

      {/* 
        Full React JS Developer - all about frontend
        Backend Developer - all about backend and databases
        libraries and frameworks - all about some librarys and frameworks
      */}

      <Styles.Skills>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Styles.Skills>
    </>
  );
};

export default Skills;
