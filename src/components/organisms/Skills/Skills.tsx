import { NextPage } from 'next';
import React from 'react';

import SkillsCard from '@components/molecules/SkillsCard/SkillsCard';

import { SkillsCtx } from '@interfaces';

import { SkillsDiv, Title } from './Skills.styles';

const Skills: NextPage<SkillsCtx> = ({
  introduction,
  technologiesTxt,
  backendTxt,
  reactTxt,
}) => {
  return (
    <>
      <Title id="skills-section">
        <h2 className="title">Skills</h2>
        <p>{introduction}</p>
      </Title>

      <SkillsDiv>
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
      </SkillsDiv>
    </>
  );
};

export default Skills;
