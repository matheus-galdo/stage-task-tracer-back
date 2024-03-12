import { SubProcess } from "@/interfaces/Entities";
import { prisma } from "@/database";

export default class SubProcessRepository {
    public find(id: number) {
        return prisma.subProcess.findUnique({ where: { id } });
    }

    public async findSubProcessesById(id: number) {
        return prisma.subProcess.findUnique({
            where: { id },
        });
    }

    public delete(id: number) {
        return prisma.subProcess.delete({ where: { id } });
    }

    public create(subProcess: SubProcess) {
        return prisma.subProcess.create({ data: subProcess });
    }

    public update(subProcess: SubProcess, id: number) {
        return prisma.subProcess.update({ where: { id }, data: subProcess });
    }
}
