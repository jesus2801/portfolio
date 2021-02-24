import {Request, Response, NextFunction} from 'express';
import {onDev, vF} from '../config';
import Helpers from '../helpers/functions';

export default {
  mainView: (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).render('home', {
        title: 'JG - Home',
        styles: [
          {
            style: `<link rel="stylesheet" href="/styles/home.min.css${
              onDev ? '' : '?' + vF
            }">`,
          },
        ],
        scripts: [
          {script: `<script src="/js/dist/home.js${onDev ? '' : '?' + vF}"></script>`},
        ],
      });
    } catch (e) {
      next(e);
    }
    Helpers.registerVisit(req);
  },
};
