import React from 'react';

import SkillsCard from '@components/molecules/SkillsCard/SkillsCard';

import { SkillsDiv, Title } from './Skills.styles';
import { useSelector } from 'react-redux';
import { AppCtx } from '@interfaces/index';

const Skills = () => {
  const { lng } = useSelector((state: AppCtx) => state.database);

  return (
    <>
      <Title id="skills-section">
        <h2 className="title">{lng['skills']}</h2>
        <p>{lng['skillsIntroduction']}</p>
      </Title>

      <SkillsDiv>
        <SkillsCard
          title={lng['otherTec']}
          image="/static/icons/frameworks.svg"
          description={lng['technologiesTxt']}
        />

        <SkillsCard
          title="full reactJS developer"
          image="/static/icons/react.svg"
          description={lng['reactTxt']}
        />

        <SkillsCard
          title="full backend developer"
          image="/static/icons/backend.svg"
          description={lng['backendTxt']}
        />
      </SkillsDiv>
    </>
  );
};

export default Skills;
