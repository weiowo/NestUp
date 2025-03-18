/*
  Warnings:

  - The `highlights` column on the `Property` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "highlights",
ADD COLUMN     "highlights" TEXT[];

-- DropEnum
DROP TYPE "Highlight";
