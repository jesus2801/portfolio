import isNode from 'detect-node';
import { FirebaseApp, initializeApp } from 'firebase/app';

import config from './config';

import { FirebaseStorage, getStorage } from 'firebase/storage';
import { Firestore, getFirestore } from 'firebase/firestore';

export class Firebase {
  public app: FirebaseApp;
  public db: Firestore;
  public storage: FirebaseStorage;

  constructor() {
    //Initialize Firebase
    this.app = initializeApp(config);

    this.db = getFirestore(this.app);
    this.storage = getStorage(this.app);
  }

  public registerVisit(path: string) {
    if (isNode) return;
    /*this.analytics!.logEvent('page_view', {
      page_path: path,
    });*/
  }

  public registerVisitGithub() {
    if (isNode) return;
    /*this.analytics!.logEvent('git_visit');*/
  }

  public registerVisitLinkedin() {
    if (isNode) return;
    /* this.analytics!.logEvent('linkedin_visit');*/
  }

  public registerCVDownload() {
    if (isNode) return;
    /*this.analytics!.logEvent('cv_download');*/
  }
}

export default new Firebase();
