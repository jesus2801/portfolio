import app from 'firebase';

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
      this.analytics = app.analytics();
    }
    this.db = app.firestore();
  }

  public registerVisit(path: string) {
    this.analytics!.logEvent('page_view', {
      page_path: path,
    });
  }

  public registerVisitGithub() {
    this.analytics!.logEvent('git_visit');
  }

  public registerVisitLinkedin() {
    this.analytics!.logEvent('linkedin_visit');
  }

  public registerCVDownload() {
    this.analytics!.logEvent('cv_download');
  }
}

export default new Firebase();
