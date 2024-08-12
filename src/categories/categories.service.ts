import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { categories, Prisma } from '@prisma/client';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoriesService {
    constructor(private prisma: PrismaService) { }

    async findAll(): Promise<CategoryDto[]> {
        return this.prisma.categories.findMany();
    }

    async findOne(id: number): Promise<CategoryDto> {
        return this.prisma.categories.findUnique({
            where: {
                id,
            },
        });
    }

    async create(data: CreateCategoryDto): Promise<categories> {
        return this.prisma.categories.create({
            data,
        });
    }

    async update(id: number, data: CreateCategoryDto): Promise<categories> {
        return this.prisma.categories.update({
            where: {
                id,
            },
            data
        });
    }

    async remove(id: number) {
        return this.prisma.categories.delete({
            where: {
                id,
            },
        })
    }


}