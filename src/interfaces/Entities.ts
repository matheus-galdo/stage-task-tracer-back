import { Area as PrismaArea, Process as PrismaProcess } from '@prisma/client';

export type Area = Omit<PrismaArea, 'id'>;
export type Process = Omit<PrismaProcess, 'id'>;