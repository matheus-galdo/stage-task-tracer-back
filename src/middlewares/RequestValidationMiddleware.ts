import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

type RequestProperties = 'body' | 'params' | 'query' | 'headers';

function validateMiddlewareFactory(schema: Schema, requestProperty: RequestProperties) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validationResult = schema.validate(req[requestProperty]);

        if (validationResult.error) {
            throw new Error(`Erro no body enviado, ${validationResult.error.message}`);
        }

        return next();
    }
}

export function validateRequestBody(schema: Schema) {
    return validateMiddlewareFactory(schema, 'body');
}

export function validateRequestParams(schema: Schema) {
    return validateMiddlewareFactory(schema, 'params');
}

export function validateRequestQueryStrings(schema: Schema) {
    return validateMiddlewareFactory(schema, 'query');
}