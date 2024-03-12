import { Process } from "@/interfaces/Entities";
import Joi from "joi";

export const processSchema = Joi.object<Process>({
    areaId: Joi.number().greater(0).required(),
    name: Joi.string().required(),
});