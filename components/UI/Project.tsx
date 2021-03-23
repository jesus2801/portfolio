import React from 'react';
import { ProjectLayout } from '../../interfaces';
import { objectError } from '../../utils/variables';

const Project = ({ project }: { project: ProjectLayout }) => {
  return (
    <a href={`/projects/${project.id}`} target="_blank">
      <div className="card-ctn">
        <div className="card">
          <object
            data={`/static/laptops-preview/${project.image}`}
            type="image/svg+xml"
          >
            {objectError}
          </object>

          <h2>{project.title}</h2>

          <p>{project.desc}</p>
        </div>
      </div>
    </a>
  );
};

export default Project;
