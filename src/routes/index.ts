import express from 'express';
import {mainView} from '../controllers/home.controller';
const router = express.Router();

router.get('/', mainView);

module.exports = router;
