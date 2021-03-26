import { Firebase } from '../firebase';
import firebase from 'firebase';

export interface LayoutContext {
  title: string;
}

export interface SkillsCardCtx {
  title: string;
  image: string;
  description: string;
}

export interface AboutSectionCtx {
  life: string;
  knowledge: string;
}

export interface LandingCtx {
  title: string;
}

export interface SkillsCtx {
  introduction: string;
  technologiesTxt: string;
  backendTxt: string;
  reactTxt: string;
}

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
}

export interface ProjectLayout extends Project {
  id: string;
}

export interface ProjectDoc
  extends firebase.firestore.DocumentSnapshot<Project> {}

export interface ContactState {
  name: string;
  mail: string;
  message: string;
  date: number;
}
