import { Process } from "@/interfaces/Entities";
import Joi from "joi";

export const processSchema = Joi.object<Process>({
    areaId: Joi.number().greater(0).required(),
    name: Joi.string().required(),
    description: Joi.string().optional(),
});

export const childProcessSchema = Joi.object<Process>({
    name: Joi.string().required(),
    description: Joi.string().optional(),
});