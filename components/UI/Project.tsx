import React from 'react';
import { ProjectLayout } from '../../interfaces';
import { objectError } from '../../utils/variables';

const Project = ({ project }: { project: ProjectLayout }) => {
  return (
    <div className="card-ctn">
      <div className="card">
        <a href={`/projects/${project.id}`} target="_blank">
          <object
            data={`/static/laptops-preview/${project.image}`}
            type="image/svg+xml"
          >
            {objectError}
          </object>

          <h2>{project.title}</h2>

          <p>{project.desc}</p>
        </a>
      </div>
    </div>
  );
};

export default Project;
