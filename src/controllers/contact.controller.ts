import {Request, Response} from 'express';

export const mainView = (req: Request, res: Response) => {
  try {
    res.status(200).render('contact', {
      title: 'JG - Contact',
      styles: [
        {style: `<link rel="stylesheet" href="/styles/contact.min.css">`},
      ],
      scripts: [{script: `<script src="/js/contact/contact.js"></script>`}],
    });
  } catch (e) {}
};