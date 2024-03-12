import { SubProcess } from "@/interfaces/Entities";
import AreaRepository from "@/repositories/AreaRepository";
import ProcessRepository from "@/repositories/ProcessRepository";
import SubProcessRepository from "@/repositories/SubProcessRepository";
import AreaService from "@/services/AreaService";
import ProcessService from "@/services/ProcessService";
import SubProcessService from "@/services/SubProcessService";
import { Request, Response } from "express";

export default class SubProcessController {
    public processRepository: ProcessRepository;
    public processService: ProcessService;

    public subProcessRepository: SubProcessRepository;
    public subProcessService: SubProcessService;

    public areaRepository: AreaRepository;
    public areaService: AreaService

    constructor() {
        this.areaRepository = new AreaRepository();
        this.areaService = new AreaService(this.areaRepository);

        this.processRepository = new ProcessRepository();
        this.processService = new ProcessService(this.processRepository, this.areaService);

        this.subProcessRepository = new SubProcessRepository();
        this.subProcessService = new SubProcessService(this.subProcessRepository, this.processService);
    }

    public async getSubProcesses(req: Request, res: Response) {
        const id = Number(req.params.id);
        const processs = await this.subProcessService.findSubProcessById(id);
        return res.send(processs);
    }

    public async create(req: Request, res: Response) {
        const process = req.body as SubProcess;
        const processCreated = await this.subProcessService.create(process);
        return res.send(processCreated);
    }

    public async update(req: Request, res: Response) {
        const id = Number(req.params.id);
        const process = req.body as SubProcess;

        const updatedProcess = await this.subProcessService.update(id, process);
        return res.send(updatedProcess);
    }

    public async delete(req: Request, res: Response) {
        const id = Number(req.params.id);
        const process = await this.subProcessService.delete(id);
        return res.send(process);
    }
}