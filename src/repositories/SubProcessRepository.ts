import { Process } from "@/interfaces/Entities";
import { prisma } from "@/database";

export default class SubProcessRepository {
    public find(id: number) {
        return prisma.process.findUnique({ where: { id } });
    }

    public async findProcessWithSubProcesses(id: number) {
        return prisma.process.findUnique({
            where: { id },
            include: { subProcesses: true, area: true }
        });
    }

    public delete(id: number) {
        return prisma.process.delete({ where: { id } });
    }

    public create(process: Process) {
        return prisma.process.create({ data: process });
    }

    public update(process: Process, id: number) {
        return prisma.process.update({ where: { id }, data: process });
    }
}
