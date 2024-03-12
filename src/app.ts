import express, { json, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';
import httpStatus from 'http-status';
import areaRouter from './routers/areaRouter';
import processRouter from './routers/processRouter';
import { ErrorHandlerMiddleware } from './middlewares/ErrorHandlerMiddleware';
import subProcessRouter from './routers/subProcessRouter';

const app = express();

app.use(json());
app.use(cors());

app.get('/health', (req: Request, res: Response) => {
  return res.status(httpStatus.OK).send("I'm ok!");
});

app.use("/areas", areaRouter);
app.use("/processes", processRouter);
app.use("/sub-processes", subProcessRouter);
app.use(ErrorHandlerMiddleware);

export default app;