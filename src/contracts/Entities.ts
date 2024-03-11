import { Area as PrismaArea } from '@prisma/client';

export type Area = Omit<PrismaArea, 'id'>;