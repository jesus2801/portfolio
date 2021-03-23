import {
  INIT_GET_PROJECTS,
  SUCCESS_GET_PROJECTS,
  SET_PROJECTS,
  INIT_GET_PROJECT,
  SUCCESS_GET_PROJECT,
  SET_PROJECT,
} from '../types/index';
import { Action } from 'redux';
import firebase from '../../firebase/index';
import { DatabaseCtx } from '../../interfaces';

const initalState: DatabaseCtx = {
  firebase,
  projects: [],
  projectSelected: null,
  loading: true,
  error: false,
};

interface DatabaseActions extends Action {
  payload: any;
}

const reducer = (state = initalState, action: DatabaseActions) => {
  switch (action.type) {
    case INIT_GET_PROJECTS:
    case INIT_GET_PROJECT:
      return {
        ...state,
        loading: action.payload,
      };
    case SUCCESS_GET_PROJECTS:
    case SUCCESS_GET_PROJECT:
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
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
