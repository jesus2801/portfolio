import {
  INIT_GET_PROJECTS,
  SUCCESS_GET_PROJECTS,
  SET_PROJECTS,
  INIT_GET_PROJECT,
  SUCCESS_GET_PROJECT,
  SET_PROJECT,
} from '../types/index';
import { AnyAction, Dispatch } from 'redux';
import Swal from 'sweetalert2';
import { Firebase } from '../../firebase';
import { ProjectLayout } from '../../interfaces';

export function getProjects(firebase: Firebase) {
  return async (dispatch: Dispatch) => {
    dispatch(initGetProjects());

    try {
      const snapshot = await firebase.db.collection('projects').get();

      const projects: any = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      dispatch(setProjects(projects));
      dispatch(successGetProjects());
      return;
    } catch (e) {
      console.log(e);
      Swal.fire(
        'Error!',
        'Sorry, an error has occurred extracting resources from the database, please try again later.',
        'error'
      );
    }
  };
}

const initGetProjects = (): AnyAction => ({
  type: INIT_GET_PROJECTS,
  payload: true,
});

const successGetProjects = (): AnyAction => ({
  type: SUCCESS_GET_PROJECTS,
  payload: false,
});

const setProjects = (projects: ProjectLayout[]): AnyAction => ({
  type: SET_PROJECTS,
  payload: projects,
});

export function getProject(id: string, firebase: Firebase) {
  return async (dispatch: Dispatch) => {
    dispatch(initGetProject());

    try {
      const project = await firebase.db
        .collection('projects')
        .doc(id)
        .get();

      if (project.exists) {
        dispatch(setProject(project.data() as ProjectLayout));
        dispatch(successGetProject());
        return;
      } else {
        dispatch(successGetProject());
      }
      return;
    } catch (e) {
      console.log(e);
      Swal.fire(
        'Error!',
        'Sorry, an error has occurred extracting resources from the database, please try again later.',
        'error'
      );
    }
  };
}

const initGetProject = (): AnyAction => ({
  type: INIT_GET_PROJECT,
  payload: true,
});

const successGetProject = (): AnyAction => ({
  type: SUCCESS_GET_PROJECT,
  payload: false,
});

const setProject = (project: ProjectLayout): AnyAction => ({
  type: SET_PROJECT,
  payload: project,
});
