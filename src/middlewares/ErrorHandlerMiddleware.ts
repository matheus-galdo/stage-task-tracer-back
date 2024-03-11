import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export function ErrorHandlerMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
    console.log(error);
    
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.name);
}