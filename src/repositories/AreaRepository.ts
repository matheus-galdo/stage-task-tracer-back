import { Area } from "@/contracts/Entities";
import { prisma } from "@/database";

export default class AreaRepository {
    public getAreas() {
        return prisma.area.findMany();
    }

    public create(area: Area) {
        return prisma.area.create({ data: area });
    }
}
