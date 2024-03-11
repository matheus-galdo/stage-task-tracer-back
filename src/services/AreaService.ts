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
        return this.areaRepository.findAreaWithProcess(id);
    }

    public create(area: Area){
        return this.areaRepository.create(area);
    }
}
