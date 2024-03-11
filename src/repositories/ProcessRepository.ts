import { Process } from "@/interfaces/Entities";
import { prisma } from "@/database";

export default class ProcessRepository {
    public find(id: number) {
        return prisma.process.findUnique({ where: { id }});
    }

    public delete(id: number) {
        return prisma.process.delete({ where: { id }});
    }
    
    public getProcesses(areaId: number) {
        return prisma.process.findMany({ where: { areaId }});
    }

    public create(process: Process) {
        return prisma.process.create({ data: process });
    }
}
