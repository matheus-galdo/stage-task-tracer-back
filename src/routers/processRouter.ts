import ProcessController from '@/controllers/ProcessController';
import { validateRequestBody, validateRequestParams } from '@/middlewares/RequestValidationMiddleware';
import { paramsIdSchema } from '@/schemas/commonSchemas';
import { processSchema } from '@/schemas/processSchema';
import express from 'express';

const processRouter = express.Router();
const controller = new ProcessController();

processRouter.post('/', validateRequestBody(processSchema), controller.create.bind(controller));
processRouter.put('/:id', validateRequestBody(processSchema), validateRequestParams(paramsIdSchema), controller.update.bind(controller));
processRouter.delete('/:id', validateRequestParams(paramsIdSchema), controller.delete.bind(controller));

export default processRouter;