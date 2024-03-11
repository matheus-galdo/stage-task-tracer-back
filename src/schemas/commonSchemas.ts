import Joi from "joi";

export const paramsIdSchema = Joi.object({
    id: Joi.number().greater(0).required(),
});