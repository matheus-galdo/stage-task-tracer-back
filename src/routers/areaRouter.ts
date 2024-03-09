import AreaController from '@/controllers/AreaController';
import express from 'express';

const areaRouter = express.Router();

const controller = new AreaController();
areaRouter.post('/', controller.create)

export default areaRouter;