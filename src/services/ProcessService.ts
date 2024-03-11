import { Process } from "@/interfaces/Entities";
import ProcessRepository from "@/repositories/ProcessRepository";
import AreaService from "./AreaService";

export default class ProcessService {
    constructor(
        private processRepository: ProcessRepository,
        private areaService: AreaService
    ) { }

    public create(process: Process){
        return this.processRepository.create(process);
    }

    public delete(id: number){
        const process = this.processRepository.find(id);

        if (process) {
            return this.processRepository.delete(id);
        }

        throw new Error('Processo inexistente');
    }
    
}
