import { Process, ProcessWithChildrenAndArea } from "@/interfaces/Entities";
import ProcessRepository from "@/repositories/ProcessRepository";
import AreaService from "./AreaService";

export default class ProcessService {
    constructor(
        private processRepository: ProcessRepository,
        private areaService: AreaService
    ) { }

    public async findProcessById(id: number) {
        const rootProcess = await this.processRepository.findProcessWithSubProcesses(id);
        return await this.getChildNodes(rootProcess);
    }

    private async getChildNodes(process: ProcessWithChildrenAndArea) {
        //TODO: problema n+1, resolver com uma única query
        const processHasChildren = process.children.length > 0;
        if (processHasChildren) {
            const promises = process.children.map(async (subProcess, index) => {
                const childNode = await this.findProcessById(subProcess.id);
                process.children[index] = childNode;
            });

            await Promise.all(promises);
        }

        return process;
    }

    public createRootProcess(process: Process) {
        const area = this.areaService.findAreaById(process.areaId);

        process.isProcessRoot = true;
        if (!area) {
            throw new Error('Área inexistente');
        }

        return this.processRepository.create(process);
    }

    public async createChildProcess(parentId: number, process: Process) {
        const parentProcess = await this.findProcessById(parentId);

        if (!parentProcess) {
            throw new Error('Parent process inexistente');
        }

        const childProcess: Process = {
            name: process.name,
            parentId: parentProcess.id,
            areaId: parentProcess.areaId,
            childProcessOrder: parentProcess.children.length + 1,
            isProcessRoot: false,
            description: null,
        }

        return this.processRepository.create(childProcess);
    }

    public async update(id: number, process: Process) {
        const existingProcess = await this.processRepository.find(id);
        const area = await this.areaService.findAreaById(process.areaId);

        const processNameAlreadyTaken = this.processRepository.find(id);

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

    public delete(id: number) {
        const process = this.processRepository.find(id);

        if (!process) {
            throw new Error('Processo inexistente');
        }

        return this.processRepository.delete(id);
    }

}
