/*
  Warnings:

  - You are about to drop the `ValueFeatureOnProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ValueFeatureOnProduct" DROP CONSTRAINT "ValueFeatureOnProduct_productId_fkey";

-- DropForeignKey
ALTER TABLE "ValueFeatureOnProduct" DROP CONSTRAINT "ValueFeatureOnProduct_valueFeatureId_fkey";

-- DropTable
DROP TABLE "ValueFeatureOnProduct";

-- CreateTable
CREATE TABLE "value_feature_on_product" (
    "id" SERIAL NOT NULL,
    "valueFeatureId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "value_feature_on_product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "value_feature_on_product" ADD CONSTRAINT "value_feature_on_product_valueFeatureId_fkey" FOREIGN KEY ("valueFeatureId") REFERENCES "value_feature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "value_feature_on_product" ADD CONSTRAINT "value_feature_on_product_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
