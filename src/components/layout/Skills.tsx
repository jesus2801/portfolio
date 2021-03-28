import { NextPage } from 'next';
import React from 'react';

import { SkillsCtx } from '../../interfaces';

import Styles from '../../styles/layout/home/Skills';

import SkillsCard from '../UI/SkillsCard';

const Skills: NextPage<SkillsCtx> = ({
  introduction,
  technologiesTxt,
  backendTxt,
  reactTxt,
}) => {
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
          description={technologiesTxt}
        />

        <SkillsCard
          title="full reactJS developer"
          image="/static/icons/react.svg"
          description={reactTxt}
        />

        <SkillsCard
          title="full backend developer"
          image="/static/icons/backend.svg"
          description={backendTxt}
        />
      </Styles.Skills>
    </>
  );
};

export default Skills;
