-- AlterTable
ALTER TABLE "Process" ADD COLUMN     "description" TEXT;

-- CreateTable
CREATE TABLE "SubProcess" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "processId" INTEGER NOT NULL,
    "description" TEXT,

    CONSTRAINT "SubProcess_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubProcess" ADD CONSTRAINT "SubProcess_processId_fkey" FOREIGN KEY ("processId") REFERENCES "Process"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
