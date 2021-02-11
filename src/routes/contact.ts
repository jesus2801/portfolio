import express from 'express';
import { mainView } from '../controllers/contact.controller';
const router = express.Router();

router.get('/contact', mainView);

module.exports = router;