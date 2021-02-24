import {Request, Response, NextFunction} from 'express';
import {getRepository} from 'typeorm';
import Errors from '../assets/errors';
import Helpers from '../helpers/functions';
import Validate from '../helpers/validateFunctions';
import {Message} from '../entity/Message';
import {vF, onDev} from '../config';

export default {
  mainView: (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).render('contact', {
        title: 'JG - Contact',
        styles: [
          {
            style: `<link rel="stylesheet" href="/styles/contact.min.css${
              onDev ? '' : '?' + vF
            }">`,
          },
        ],
        scripts: [
          {
            script: `<script src="/librarys/package/dist/sweetalert2.all.min.js" defer></script>`,
          },
          {
            script: `<script src="/js/dist/contact.js${
              onDev ? '' : '?' + vF
            }" defer></script>`,
          },
        ],
      });
    } catch (e) {
      next(e);
    }
    Helpers.registerVisit(req);
  },

  addNewMessage: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {name, email, phone, message} = req.body;
      if (
        Validate.isEmpty(name, email, message) ||
        !Validate.isValidString(name) ||
        !Validate.isValidString(email) ||
        !Validate.isValidString(message)
      ) {
        Helpers.sendResponse(res, '¡Error!', Errors.invalidSimbolsOrEmptyField, true);
        return;
      }

      if (!Validate.isEmail(email)) {
        Helpers.sendResponse(res, '¡Error!', Errors.invalidField('email'), true);
        return;
      }
      const repository = getRepository(Message);
      const newMessage = new Message();
      newMessage.userName = name;
      newMessage.email = email;
      newMessage.phoneNumber = phone;
      newMessage.message = message;
      await repository.save(newMessage);
      Helpers.sendResponse(
        res,
        '!Message sent!',
        'Your message has been sent successfully',
        false
      );
    } catch (e) {
      next(e);
    }
  },
};
