import { Area } from "@/contracts/Entities";
import AreaRepository from "@/repositories/AreaRepository";

export default class AreaService {
    constructor(
        private areaRepository: AreaRepository
    ) { }

    public getAreas(){
        return this.areaRepository.getAreas();
    }

    public create(area: Area){
        return this.areaRepository.create(area);
    }
}
