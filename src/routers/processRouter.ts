import ProcessController from '@/controllers/ProcessController';
import express from 'express';

const processRouter = express.Router();
const controller = new ProcessController();

processRouter.post('/', controller.create.bind(controller));
processRouter.delete('/:id', controller.delete.bind(controller));

export default processRouter;