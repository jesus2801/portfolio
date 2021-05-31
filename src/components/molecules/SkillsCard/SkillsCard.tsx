import React from 'react';

import { SkillsCardProps } from '@interfaces/props';

import { objectError } from '@utils/variables';

const SkillsCard = ({ image, title, description }: SkillsCardProps) => {
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
