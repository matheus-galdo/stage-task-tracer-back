import {
    Area as PrismaArea,
    Process as PrismaProcess,
    SubProcess as PrismaSubProcess,
} from '@prisma/client';

export type Area = Omit<PrismaArea, 'id'>;
export type Process = Omit<PrismaProcess, 'id'>;
export type SubProcess = Omit<PrismaSubProcess, 'id'>;