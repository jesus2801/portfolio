import React from 'react';

import { ProjectProps } from '@interfaces/props';

import { objectError } from '@utils/variables';

import { ProjectDiv } from './Project.styles';

const Project = ({ project }: ProjectProps) => {
  return (
    <ProjectDiv>
      <div className="card">
        <a href={`/projects?id=${project.id}`} target="_blank">
          <object data={`/static/laptops-preview/${project.image}`} type="image/svg+xml">
            {objectError}
          </object>

          <h3>{project.title}</h3>

          <p>{project.desc}</p>
        </a>
      </div>
    </ProjectDiv>
  );
};

export default Project;
