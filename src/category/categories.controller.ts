import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-categories.dto'
import { ListAllCategoriesDto } from './dto/list-all-categories.dto';
import { CategoryService } from './categories.service';

@Controller('categories')
export class CategoriesController {

  constructor(private categoryService: CategoryService) {}

  @Get()
  findAll(@Query() query: ListAllCategoriesDto) {
    return this.categoryService.getAllCategories();
  }

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoryService.createCategory(createCategoryDto);
  }

}