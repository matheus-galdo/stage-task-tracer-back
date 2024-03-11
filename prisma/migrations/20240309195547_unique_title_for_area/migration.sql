/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Area` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Area_title_key" ON "Area"("title");
