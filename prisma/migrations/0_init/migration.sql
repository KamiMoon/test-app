-- CreateTable
CREATE TABLE "cars" (
    "brand" VARCHAR(255),
    "model" VARCHAR(255),
    "year" INTEGER,
    "color" VARCHAR(255)
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "description" VARCHAR(255),

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cats" (
    "id" SERIAL NOT NULL,
    "cat_name" VARCHAR(255),
    "cat_age" INTEGER,
    "cat_breed" VARCHAR(255),

    CONSTRAINT "cats_pkey" PRIMARY KEY ("id")
);

