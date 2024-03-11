import { Process } from "@/interfaces/Entities";
import { prisma } from "@/database";

export default class ProcessRepository {
    public getProcesses(areaId: number) {
        return prisma.process.findMany({ where: { areaId }});
    }

    public create(process: Process) {
        return prisma.process.create({ data: process });
    }
}
