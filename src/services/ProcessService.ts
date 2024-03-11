import { Process } from "@/interfaces/Entities";
import ProcessRepository from "@/repositories/ProcessRepository";
import AreaService from "./AreaService";

export default class ProcessService {
    constructor(
        private processRepository: ProcessRepository,
        private areaService: AreaService
    ) { }

    public async getProcessesByAreaId(title: string){
        const area = await this.areaService.findAreaByTitle(title);
        
        return this.processRepository.getProcesses(area.id);
    }

    public create(process: Process){
        return this.processRepository.create(process);
    }
}
