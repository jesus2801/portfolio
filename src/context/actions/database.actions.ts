import { AnyAction, Dispatch } from 'redux';
import Swal from 'sweetalert2';

import {
  INIT_GET_PROJECTS,
  SUCCESS_GET_PROJECTS,
  SET_PROJECTS,
  INIT_GET_PROJECT,
  SUCCESS_GET_PROJECT,
  SET_PROJECT,
  INIT_SEND_MESSAGE,
  FAILED_SEND_MESSAGE,
  SUCCESS_SEND_MESSAGE,
  FAILED_GET_PROJECT,
  FAILED_GET_PROJECTS,
  SET_SELECTED_LNG,
} from '@context/types';

import en from '../../locales/en/translation.json';
import es from '../../locales/es/translation.json';

import { AppLngs, ContactState, ProjectLayout } from '@interfaces';

import { Firebase } from '@firebase';

import { handleLoading } from '@functions';
import { collection, doc, getDoc, getDocs, orderBy, query, setDoc } from 'firebase/firestore';

export function getProjects(firebase: Firebase) {
  return async (dispatch: Dispatch) => {
    dispatch(initGetProjects());

    try {
      //const snapshot = await firebase.db.collection('projects').orderBy('order', 'asc').get();
      const snapshot = await getDocs(query(collection(firebase.db, "projects"), orderBy('order', 'asc')));

      const projects: any = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      dispatch(setProjects(projects));
      dispatch(successGetProjects());
      return;
    } catch (e) {
      dispatch(failedGetProjects());
      Swal.fire(
        'Error!',
        'Sorry, an error has occurred extracting resources from the database, please try again later.',
        'error',
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

const failedGetProjects = (): AnyAction => ({
  type: FAILED_GET_PROJECTS,
  payload: true,
});

const setProjects = (projects: ProjectLayout[]): AnyAction => ({
  type: SET_PROJECTS,
  payload: projects,
});

export function getProject(id: string, firebase: Firebase) {
  return async (dispatch: Dispatch) => {
    handleLoading(true);
    dispatch(initGetProject());

    try {
      //const project = await firebase.db.collection('projects').doc(id).get();
      const project = await getDoc(doc(firebase.db, "projects", id));

      if (project.exists()) {
        dispatch(setProject(project.data() as ProjectLayout));
        dispatch(successGetProject());
      } else {
        dispatch(failedGetProject());
      }
      handleLoading(false);
    } catch (e) {
      handleLoading(false);
      dispatch(failedGetProject());
      Swal.fire(
        'Error!',
        'Sorry, an error has occurred extracting resources from the database, please try again later.',
        'error',
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

const failedGetProject = (): AnyAction => ({
  type: FAILED_GET_PROJECT,
  payload: true,
});

const setProject = (project: ProjectLayout): AnyAction => ({
  type: SET_PROJECT,
  payload: project,
});

export function sendMessage(message: ContactState, firebase: Firebase) {
  return async (dispatch: Dispatch) => {
    handleLoading(true);
    dispatch(initSendMessage());

    try {
      //await firebase.db.collection('messages').add(message);
      await setDoc(doc(firebase.db, "messages"), message);

      dispatch(succesSendMessage());
      handleLoading(false);
      Swal.fire('Success!', 'your message has been sent successfully!', 'success');
    } catch (e) {
      dispatch(failedSendMessage());
      Swal.fire('Error!', 'Sorry, an error has occurred, please try again later', 'error');
    }
  };
}

const initSendMessage = (): AnyAction => ({
  type: INIT_SEND_MESSAGE,
});

const succesSendMessage = (): AnyAction => ({
  type: SUCCESS_SEND_MESSAGE,
});

const failedSendMessage = (): AnyAction => ({
  type: FAILED_SEND_MESSAGE,
});

export function setSelectedLng(lng: AppLngs) {
  return (dispatch: Dispatch) => {
    const cases = { en, es };
    dispatch(initSetSelectedLng(cases[lng]));
  };
}

const initSetSelectedLng = (lng: any): AnyAction => ({
  type: SET_SELECTED_LNG,
  payload: lng,
});
