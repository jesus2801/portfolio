import { NextPage } from 'next';
import React from 'react';

import { SkillsCtx } from '../../interfaces';

import Styles from '../../styles/layout/home/Skills';

import SkillsCard from '../UI/SkillsCard';

const Skills: NextPage<SkillsCtx> = ({ introduction }) => {
  return (
    <>
      <Styles.Title id="skills-section">
        <h2 className="title">Skills</h2>
        <p>{introduction}</p>
      </Styles.Title>

      <Styles.Skills>
        <SkillsCard
          title="other technologies"
          image="/static/icons/frameworks.svg"
          description={`I also have a lot of knowledge of other 
          technologies such as Sass, handlebars, Testing with Supertest 
          and Jest, quite a few modules of npm and APIs, JSX, Github, Java, 
          Electron, among others`}
        />
        <SkillsCard
          title="full reactJS developer"
          image="/static/icons/react.svg"
          description={`As for the frontend, the technology that 
          I know and use the most is React, using NextJS for most 
          cases and Gatsby when the website is not very interactive, 
          I also use quite a lot of redux, hooks, sometimes classes, 
          and I always support my projects with Typescript`}
        />
        <SkillsCard
          title="full backend developer"
          image="/static/icons/backend.svg"
          description={`On the backend side, I have used PHP but very little, 
          without a doubt what I know and use the most is NodeJS with Typescript, 
          I am able to perform all the necessary operations with databases, files, 
          endopoints, API structure, API with GraphQL. In the databases I have a lot 
          of knowledge regarding MySql, MongoDB, Firebase and JsonServer`}
        />
      </Styles.Skills>
    </>
  );
};

export default Skills;
