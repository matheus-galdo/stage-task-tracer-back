import { Area } from "@/interfaces/Entities";
import Joi from "joi";

export const areaSchema = Joi.object<Area>({
    title: Joi.string().required(),
});