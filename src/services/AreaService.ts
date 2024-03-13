import { Area } from "@/interfaces/Entities";
import AreaRepository from "@/repositories/AreaRepository";

export default class AreaService {
    constructor(
        private areaRepository: AreaRepository
    ) { }

    public getAreas(){
        return this.areaRepository.getAreas();
    }

    public findAreaByTitle(title: string) {
        return this.areaRepository.findAreaByTitle(title);
    }

    public findAreaById(id: number) {
        return this.areaRepository.findAreaWithRootProcesses(id);
    }

    public create(area: Area){
        return this.areaRepository.create(area);
    }

    public async update(id: number, area: Area) {
        const existingArea = await this.areaRepository.find(id);

        const areaTitleAlreadyTaken = await this.areaRepository.findAreaByTitle(area.title);

        console.log(areaTitleAlreadyTaken);
        

        if (!existingArea) {
            throw new Error('Área inexistente');
        }

        if (areaTitleAlreadyTaken) {
            throw new Error('Nome de área já está em uso');
        }

        return this.areaRepository.update(id, area);
    }

    public delete(id: number) {
        const area = this.areaRepository.find(id);

        if (!area) {
            throw new Error('Área inexistente');
        }

        return this.areaRepository.delete(id);
    }
}
