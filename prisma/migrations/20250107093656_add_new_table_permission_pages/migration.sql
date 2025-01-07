-- CreateTable
CREATE TABLE "permission_pages" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "active" BOOLEAN DEFAULT true,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "permission_pages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "permission_pages" ADD CONSTRAINT "permission_pages_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
