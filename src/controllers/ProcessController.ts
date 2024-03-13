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

    public async getProcesses(req: Request, res: Response) {
        const id = Number(req.params.id);
        const processs = await this.processService.findProcessById(id);
        return res.send(processs);
    }

    public async createRoot(req: Request, res: Response) {
        const process = req.body as Process;
        const processCreated = await this.processService.createRootProcess(process);
        return res.send(processCreated);
    }

    public async createChild(req: Request, res: Response) {
        const process = req.body as Process;
        const id = Number(req.params.id);

        const processCreated = await this.processService.createChildProcess(id, process);
        return res.send(processCreated);
    }

    public async update(req: Request, res: Response) {
        const id = Number(req.params.id);
        const process = req.body as Process;

        const updatedProcess = await this.processService.update(id, process);
        return res.send(updatedProcess);
    }

    public async delete(req: Request, res: Response) {
        const id = Number(req.params.id);
        const process = await this.processService.delete(id);
        return res.send(process);
    }
}