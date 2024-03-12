import { SubProcess } from "@/interfaces/Entities";
import SubProcessRepository from "@/repositories/SubProcessRepository";
import ProcessService from "./ProcessService";

export default class SubProcessService {
    constructor(
        private subProcessRepository: SubProcessRepository,
        private processService: ProcessService,
    ) { }

    public findSubProcessById(id: number) {
        return this.subProcessRepository.findSubProcessesById(id);
    }

    public create(subProcess: SubProcess) {
        const process = this.processService.findProcessById(subProcess.processId);
        if (!process) {
            throw new Error('Processo inexistente');
        }

        return this.subProcessRepository.create(subProcess);
    }

    public async update(id: number, subProcess: SubProcess) {
        console.log('aqui', {subProcess});
        
        const existingSubProcess = await this.subProcessRepository.find(id);
        const process = await this.processService.findProcessById(existingSubProcess.processId);

        const processNameAlreadyTaken = this.subProcessRepository.find(id);

        if (!existingSubProcess) {
            throw new Error('Sub processo inexistente');
        }

        if (!process) {
            throw new Error('processo inexistente');
        }

        if (!processNameAlreadyTaken) {
            throw new Error('Nome de sub processo já está em uso');
        }

        return this.subProcessRepository.update(subProcess, id);
    }

    public delete(id: number) {
        const subProcess = this.subProcessRepository.find(id);

        if (!subProcess) {
            throw new Error('Sub processo inexistente');
        }

        return this.subProcessRepository.delete(id);
    }
}
