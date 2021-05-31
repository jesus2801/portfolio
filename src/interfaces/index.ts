import firebase from 'firebase/app';

import { Firebase } from '@firebase';

export interface IndexCtx {
  skillsIntroduction: string;
  lifeText: string;
  knowledgeText: string;
  technologiesTxt: string;
  backendTxt: string;
  reactTxt: string;
}

export interface DatabaseCtx {
  firebase: Firebase;
  projects: ProjectLayout[];
  loading: boolean;
  error: boolean;
  projectSelected: null | ProjectLayout;
}

export interface AppCtx {
  database: DatabaseCtx;
}

export interface Project {
  title: string;
  desc: string;
  image: string;
  mainText: string;
  videoSrc: string;
  order: number;
  git: string;
  deploy: string;
}

export interface ProjectLayout extends Project {
  id: string;
}

export interface ProjectDoc extends firebase.firestore.DocumentSnapshot<Project> {}

export interface ContactState {
  name: string;
  mail: string;
  message: string;
  date: number;
}
