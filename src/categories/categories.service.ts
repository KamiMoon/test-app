import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { categories, Prisma } from '@prisma/client';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoriesService {
    constructor(private prisma: PrismaService) { }


    //   async users(params: {
    //     skip?: number;
    //     take?: number;
    //     cursor?: Prisma.UserWhereUniqueInput;
    //     where?: Prisma.UserWhereInput;
    //     orderBy?: Prisma.UserOrderByWithRelationInput;
    //   }): Promise<User[]> {
    //     const { skip, take, cursor, where, orderBy } = params;
    //     return this.prisma.user.findMany({
    //       skip,
    //       take,
    //       cursor,
    //       where,
    //       orderBy,
    //     });
    //   }

    async findAll(): Promise<CategoryDto[]> {
        return this.prisma.categories.findMany();
    }


    async create(data: CreateCategoryDto): Promise<categories> {
        return this.prisma.categories.create({
            data,
        });
    }

    //   async updateUser(params: {
    //     where: Prisma.UserWhereUniqueInput;
    //     data: Prisma.UserUpdateInput;
    //   }): Promise<User> {
    //     const { where, data } = params;
    //     return this.prisma.user.update({
    //       data,
    //       where,
    //     });
    //   }

    //   async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    //     return this.prisma.user.delete({
    //       where,
    //     });
    //   }
}