import { Area } from "@/interfaces/Entities";
import AreaRepository from "@/repositories/AreaRepository";
import AreaService from "@/services/AreaService";
import { Request, Response } from "express";

export default class AreaController {
    public areaRepository: AreaRepository;
    public areaService: AreaService

    constructor() {
        this.areaRepository = new AreaRepository();
        this.areaService = new AreaService(this.areaRepository);
    }

    public async index(req: Request, res: Response) {
        const areas = await this.areaService.getAreas();
        return res.send(areas);
    }

    public async create(req: Request, res: Response) {
        const area = req.body as Area;
        const areaCreated = await this.areaService.create(area);
        return res.send(areaCreated);
    }
}