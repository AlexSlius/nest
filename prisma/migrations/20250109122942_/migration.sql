/*
  Warnings:

  - You are about to drop the `pages` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `places` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "places" ADD COLUMN     "address" TEXT DEFAULT '';

-- DropTable
DROP TABLE "pages";

-- CreateIndex
CREATE UNIQUE INDEX "places_name_key" ON "places"("name");
