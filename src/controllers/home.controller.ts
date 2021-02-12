import {Request, Response} from 'express';

export const mainView = (req: Request, res: Response) => {
  try {
    res.status(200).render('home', {
      title: 'JG - Home',
      styles: [{style: `<link rel="stylesheet" href="/styles/home.min.css">`}], ///
      scripts: [
        // {script: `<script src="/workerHelper.js"></script>`},
        {script: `<script src="/js/home/home.js"></script>`},
      ],
    });
  } catch (e) {}
};
