import app from 'firebase/app';
import isNode from 'detect-node';

import config from './config';

import 'firebase/firestore';
import 'firebase/analytics';

export class Firebase {
  public db: app.firestore.Firestore;
  public analytics: app.analytics.Analytics | undefined;

  constructor() {
    // Initialize Firebase
    if (app.apps.length === 0) {
      app.initializeApp(config);
      if (!isNode) this.analytics = app.analytics();
    }
    this.db = app.firestore();
  }

  public registerVisit(path: string) {
    if (isNode) return;
    this.analytics!.logEvent('page_view', {
      page_path: path,
    });
  }

  public registerVisitGithub() {
    if (isNode) return;
    this.analytics!.logEvent('git_visit');
  }

  public registerVisitLinkedin() {
    if (isNode) return;
    this.analytics!.logEvent('linkedin_visit');
  }

  public registerCVDownload() {
    if (isNode) return;
    this.analytics!.logEvent('cv_download');
  }
}

export default new Firebase();
