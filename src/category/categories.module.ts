import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesRepository } from './categories.repository';
import { CategoryService } from './categories.service';

@Module({
  imports: [],
  controllers: [CategoriesController],
  providers: [CategoryService, CategoriesRepository],
})
export class CategoryModule {}
