import { SubProcess } from "@/interfaces/Entities";
import Joi from "joi";

export const subProcessSchema = Joi.object<SubProcess>({
    name: Joi.string().required(),
    processId: Joi.number().greater(0).required(),
    description: Joi.string().optional(),
});