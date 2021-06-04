import { Action } from 'redux';

import {
  INIT_GET_PROJECTS,
  SUCCESS_GET_PROJECTS,
  SET_PROJECTS,
  INIT_GET_PROJECT,
  SUCCESS_GET_PROJECT,
  SET_PROJECT,
  SUCCESS_SEND_MESSAGE,
  INIT_SEND_MESSAGE,
  FAILED_SEND_MESSAGE,
  FAILED_GET_PROJECT,
  FAILED_GET_PROJECTS,
  SET_SELECTED_LNG,
} from '@context/types/index';

import { DatabaseCtx } from '@interfaces';

import firebase from '@firebase';
import defaultLng from '../../locales/en/translation.json';

const initalState: DatabaseCtx = {
  firebase,
  projects: [],
  projectSelected: null,
  loading: true,
  error: false,
  lng: defaultLng,
};

interface DatabaseActions extends Action {
  payload: any;
}

const reducer = (state = initalState, action: DatabaseActions): DatabaseCtx => {
  switch (action.type) {
    case INIT_GET_PROJECTS:
    case INIT_GET_PROJECT:
      return {
        ...state,
        loading: action.payload,
      };
    case SUCCESS_GET_PROJECTS:
    case SUCCESS_GET_PROJECT:
    case FAILED_GET_PROJECT:
    case FAILED_GET_PROJECTS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case SET_PROJECT:
      return {
        ...state,
        projectSelected: action.payload,
      };

    case SET_SELECTED_LNG:
      return {
        ...state,
        lng: action.payload,
      };

    case INIT_SEND_MESSAGE:
    case SUCCESS_SEND_MESSAGE:
    case FAILED_SEND_MESSAGE:
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
