import { Injectable } from '@nestjs/common';
import { ICategory } from 'src/interface/category.interface';
import { CategoriesRepository } from './categories.repository';
import { CreateCategoryDto } from './dto/create-categories.dto';

@Injectable()
export class CategoryService {

  constructor(private categoriesRepository: CategoriesRepository) {}

  getAllCategories(): Promise<Array<ICategory>> {
    return this.categoriesRepository.getAllCategories();
  }

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<ICategory> {
    return await this.categoriesRepository.createCategory(createCategoryDto);
  }
  
}
