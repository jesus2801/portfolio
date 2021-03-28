import { NextPage } from 'next';
import React from 'react';
import { SkillsCardCtx } from '../../interfaces';
import { objectError } from '../../utils/variables';

const SkillsCard: NextPage<SkillsCardCtx> = ({
  image,
  title,
  description,
}) => {
  return (
    <div>
      <object data={image} type="image/svg+xml">
        {objectError}
      </object>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SkillsCard;
