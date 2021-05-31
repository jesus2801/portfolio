import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { getProjects } from '@context/actions/database.actions';

import Project from '@components/molecules/Project/Project';

import { AppCtx } from '@interfaces';

import { MainGrid, TitleCtn } from './Projects.styles';

const Projects = () => {
  const dispatch = useDispatch();

  const projects = useSelector(
    (state: AppCtx) => state.database.projects
  );

  const firebase = useSelector(
    (state: AppCtx) => state.database.firebase
  );

  useEffect(() => {
    dispatch(getProjects(firebase));
  }, []);

  return (
    <MainGrid id="projects-section">
      <TitleCtn>
        <div>
          <h2>project list</h2>
          <p>List of some of the projects that I have developed</p>
        </div>
      </TitleCtn>

      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </MainGrid>
  );
};

export default Projects;
