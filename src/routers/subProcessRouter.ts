import SubProcessController from '@/controllers/SubProcessController';
import { validateRequestBody, validateRequestParams } from '@/middlewares/RequestValidationMiddleware';
import { paramsIdSchema } from '@/schemas/commonSchemas';
import { subProcessSchema } from '@/schemas/subProcessSchema';
import express from 'express';

const subProcessRouter = express.Router();
const controller = new SubProcessController();

subProcessRouter.post('/', validateRequestBody(subProcessSchema), controller.create.bind(controller));
subProcessRouter.put('/:id', validateRequestParams(paramsIdSchema), validateRequestBody(subProcessSchema), controller.update.bind(controller));
subProcessRouter.delete('/:id', validateRequestParams(paramsIdSchema), controller.delete.bind(controller));

export default subProcessRouter;