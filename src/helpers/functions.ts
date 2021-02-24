import {Response, Request} from 'express';
import {getRepository} from 'typeorm';
import {Visit} from '../entity/Visit';

export default {
  sendResponse: (res: Response, title: string, message: string, error: boolean) => {
    res.json({
      title,
      error,
      message,
    });
  },
  registerVisit: (req: Request) => {
    const repository = getRepository(Visit);
    const visit = new Visit();
    visit.ip = req.ip;
    visit.rute = req.url;
    visit.date = new Date();
    repository.save(visit);
  },
};
