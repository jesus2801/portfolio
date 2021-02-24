import express from 'express';
import ContactCtrl from '../controllers/contact.controller';
import Auth from '../middlewares/auth';

const router = express.Router();
router
  .route('/')
  .get(ContactCtrl.mainView)
  .post(Auth.cleanBodyData, ContactCtrl.addNewMessage);

export default router;
