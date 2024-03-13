import AreaController from '@/controllers/AreaController';
import { validateRequestBody, validateRequestParams } from '@/middlewares/RequestValidationMiddleware';
import { areaSchema } from '@/schemas/areaSchema';
import { paramsIdSchema } from '@/schemas/commonSchemas';
import express from 'express';

const areaRouter = express.Router();
const controller = new AreaController();

areaRouter
    .get('/', controller.index.bind(controller))
    .get('/:id/processes', validateRequestParams(paramsIdSchema), controller.getProcesses.bind(controller))
    .post('/', validateRequestBody(areaSchema), controller.create.bind(controller))
    .put('/:id', validateRequestParams(paramsIdSchema), validateRequestBody(areaSchema), controller.update.bind(controller))
    .delete('/:id', validateRequestParams(paramsIdSchema), controller.delete.bind(controller));

export default areaRouter;