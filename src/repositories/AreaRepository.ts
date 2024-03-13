import { Area } from "@/interfaces/Entities";
import { prisma } from "@/database";

export default class AreaRepository {
    public getAreas() {
        return prisma.area.findMany();
    }

    public findAreaWithRootProcesses(id: number) {
        return prisma.area.findUnique({
            where: { id },
            include: { processes: { where: { isProcessRoot: true } } }
        });
    }

    public findAreaByTitle(title: string) {
        return prisma.area.findUnique({ where: { title } });
    }

    public create(area: Area) {
        return prisma.area.create({ data: area });
    }
}
