import React from 'react';
import { ProjectLayout } from '../../interfaces';
import { objectError } from '../../utils/variables';

const Project = ({ project }: { project: ProjectLayout }) => {
  return (
    <div className="card-ctn">
      <div className="card">
        <a href={`/projects?id=${project.id}`} target="_blank">
          <object
            data={`/static/laptops-preview/${project.image}`}
            type="image/svg+xml"
          >
            {objectError}
          </object>

          <h3>{project.title}</h3>

          <p>{project.desc}</p>
        </a>
      </div>
    </div>
  );
};

export default Project;
