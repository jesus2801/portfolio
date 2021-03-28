import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppCtx } from '../../interfaces';

import { getProjects } from '../../context/actions/database.actions';

import Styles from '../../styles/layout/home/Projects';
import Project from '../UI/Project';

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
    <Styles.MainGrid id="projects-section">
      <Styles.TitleCtn>
        <div>
          <h2>project list</h2>
          <p>List of some of the projects that I have developed</p>
        </div>
      </Styles.TitleCtn>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </Styles.MainGrid>
  );
};

export default Projects;
