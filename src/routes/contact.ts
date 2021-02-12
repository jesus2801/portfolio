import express from 'express';
import { addNewMessage, mainView } from '../controllers/contact.controller';
const router = express.Router();

router.get('/', mainView);
router.put('/addNewMessage', addNewMessage);

module.exports = router;