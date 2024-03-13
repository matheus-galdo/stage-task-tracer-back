/*
  Warnings:

  - You are about to drop the `SubProcess` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SubProcess" DROP CONSTRAINT "SubProcess_processId_fkey";

-- AlterTable
ALTER TABLE "Process" ADD COLUMN     "childProcessOrder" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "isProcessRoot" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "parentId" INTEGER;

-- DropTable
DROP TABLE "SubProcess";

-- AddForeignKey
ALTER TABLE "Process" ADD CONSTRAINT "Process_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Process"("id") ON DELETE SET NULL ON UPDATE CASCADE;
