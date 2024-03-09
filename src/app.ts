import express, { json, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';
import httpStatus from 'http-status';
import areaRouter from './routers/areaRouter';

const app = express();

app.use(json());
app.use(cors());

app.get('/health', (req: Request, res: Response) => {
  return res.status(httpStatus.OK).send("I'm ok!");
});

app.use("/areas", areaRouter)

export default app;