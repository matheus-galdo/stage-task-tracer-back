import AreaController from '@/controllers/AreaController';
import express from 'express';

const areaRouter = express.Router();
const controller = new AreaController();

areaRouter.get('/', controller.index.bind(controller))
areaRouter.post('/', controller.create.bind(controller))

export default areaRouter;