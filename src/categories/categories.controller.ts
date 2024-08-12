import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryDto } from './dto/category.dto';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) { }

    @Post()
    create(@Body() body: CreateCategoryDto): Promise<CategoryDto> {
        return this.categoriesService.create(body);
    }
    /*
        @Get()
        findAll() {
            return this.categoriesService.findAll();
        }
    
        @Get(':id')
        findOne(@Param('id') id: string) {
            return this.categoriesService.findOne(+id);
        }
    
        @Patch(':id')
        update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
            return this.categoriesService.update(+id, updateCatDto);
        }
    
        @Delete(':id')
        remove(@Param('id') id: string) {
            return this.categoriesService.remove(+id);
        }
        */
}
