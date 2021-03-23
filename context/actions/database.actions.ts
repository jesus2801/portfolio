import {
  INIT_GET_PROJECTS,
  SUCCESS_GET_PROJECTS,
  SET_PROJECTS,
} from '../types/index';
import { AnyAction, Dispatch } from 'redux';
import Swal from 'sweetalert2';
import { Firebase } from '../../firebase';
import { ProjectLayout } from '../../interfaces';

export function getProjects(firebase: Firebase) {
  return async (dispatch: Dispatch) => {
    dispatch(initGetProducts());

    try {
      const snapshot = await firebase.db.collection('projects').get();

      const projects: any = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      dispatch(setProjects(projects));
      dispatch(succesGetProduct());
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

const initGetProducts = (): AnyAction => ({
  type: INIT_GET_PROJECTS,
  payload: true,
});

const succesGetProduct = (): AnyAction => ({
  type: SUCCESS_GET_PROJECTS,
  payload: false,
});

const setProjects = (projects: ProjectLayout[]): AnyAction => ({
  type: SET_PROJECTS,
  payload: projects,
});
