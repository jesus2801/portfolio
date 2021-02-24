import express from 'express';
import HomeCtrl from '../controllers/home.controller';

const router = express.Router();
router.get('/', HomeCtrl.mainView);

export default router;
