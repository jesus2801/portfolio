import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { getProjects } from '@context/actions/database.actions';

import Project from '@components/molecules/Project/Project';

import { AppCtx } from '@interfaces';

import { MainGrid, TitleCtn } from './Projects.styles';

const Projects = () => {
  const dispatch = useDispatch();

  const { firebase, projects, lng } = useSelector((state: AppCtx) => state.database);

  useEffect(() => {
    dispatch(getProjects(firebase));
  }, []);

  return (
    <MainGrid id="projects-section">
      <TitleCtn>
        <div>
          <h2>{lng['projectList']}</h2>
          <p>{lng['projectsDesc']}</p>
        </div>
      </TitleCtn>

      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </MainGrid>
  );
};

export default Projects;
