import { Process } from "@/interfaces/Entities";
import ProcessRepository from "@/repositories/ProcessRepository";
import AreaService from "./AreaService";

export default class SubProcessService {
    constructor(
        private processRepository: ProcessRepository,
        private areaService: AreaService
    ) { }

    public findProcessById(id: number) {
        return this.processRepository.findProcessWithSubProcesses(id);
    }

    public create(process: Process){
        const area = this.areaService.findAreaById(process.areaId);
        if (!area) {
            throw new Error('Área inexistente');
        }

        return this.processRepository.create(process);
    }

    public update(id: number, process: Process){
        const existingProcess = this.processRepository.find(id);
        const area = this.areaService.findAreaById(process.areaId);
        
        const processNameAlreadyTaken = this.processRepository.find(id);
        //achar pelo nome

        if (!existingProcess) {
            throw new Error('Processo inexistente');
        }

        if (!area) {
            throw new Error('Área inexistente');
        }

        if (!processNameAlreadyTaken) {
            throw new Error('Nome de Processo já está em uso');
        }

        return this.processRepository.update(process, id);
    }

    public delete(id: number){
        const process = this.processRepository.find(id);

        if (!process) {
            throw new Error('Processo inexistente');
        }
        
        return this.processRepository.delete(id);
    }
    
}
