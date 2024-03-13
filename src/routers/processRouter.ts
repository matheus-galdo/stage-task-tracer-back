import ProcessController from '@/controllers/ProcessController';
import { validateRequestBody, validateRequestParams } from '@/middlewares/RequestValidationMiddleware';
import { paramsIdSchema } from '@/schemas/commonSchemas';
import { processSchema } from '@/schemas/processSchema';
import express from 'express';

const processRouter = express.Router();
const controller = new ProcessController();

processRouter
    .get('/:id', validateRequestParams(paramsIdSchema), controller.getProcesses.bind(controller))
    .post('/', validateRequestBody(processSchema), controller.createRoot.bind(controller))
    .put('/:id', validateRequestParams(paramsIdSchema), validateRequestBody(processSchema), controller.update.bind(controller))
    .delete('/:id', validateRequestParams(paramsIdSchema), controller.delete.bind(controller))

    .post('/:id/sub-processes', validateRequestParams(paramsIdSchema), validateRequestBody(processSchema), controller.createChild.bind(controller))
    .put('/:id/sub-processes', validateRequestParams(paramsIdSchema), validateRequestBody(processSchema), controller.update.bind(controller));
export default processRouter;