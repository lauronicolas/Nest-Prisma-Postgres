import { Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client'
import { ICategory } from 'src/interface/category.interface';
import { CreateCategoryDto } from './dto/create-categories.dto';

const prisma = new PrismaClient()

@Injectable()
export class CategoriesRepository {
  async getAllCategories(): Promise<Array<ICategory>> {
    return await prisma.category.findMany()
  }

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<ICategory> {
    return await prisma.category.create({
      data: {
        name: createCategoryDto.name
      }
    });
  }
}
