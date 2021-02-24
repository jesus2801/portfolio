import {Request, Response, NextFunction} from 'express';
import Errors from '../assets/errors';
import Helpers from '../helpers/functions';

export default {
  cleanBodyData: (req: Request, res: Response, next: NextFunction) => {
    for (const property in req.body) {
      req.body[property] = req.body[property].trim();
      if (req.body[property] === '') {
        Helpers.sendResponse(res, '¡Error!', Errors.invalidSimbolsOrEmptyField, true);
      }
    }
    next();
  },
};
