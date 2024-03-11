import { Process } from "@/interfaces/Entities";
import AreaRepository from "@/repositories/AreaRepository";
import ProcessRepository from "@/repositories/ProcessRepository";
import AreaService from "@/services/AreaService";
import ProcessService from "@/services/ProcessService";
import { Request, Response } from "express";

export default class ProcessController {
    public processRepository: ProcessRepository;
    public processService: ProcessService;

    public areaRepository: AreaRepository;
    public areaService: AreaService

    constructor() {
        this.areaRepository = new AreaRepository();
        this.areaService = new AreaService(this.areaRepository);

        this.processRepository = new ProcessRepository();
        this.processService = new ProcessService(this.processRepository, this.areaService);
    }

    public async create(req: Request, res: Response) {
        const process = req.body as Process;
        console.log(process);
        
        const processCreated = await this.processService.create(process);
        return res.send(processCreated);
    }
}