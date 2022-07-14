import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { IProduct } from 'src/interface/product.interface';
import { CreateProductDto } from './dto/create-product.dto';
import {randomUUID} from 'crypto';
import { UpdateProductDto } from './dto/update-product.dto';

const prisma = new PrismaClient()

@Injectable()
export class ProductRepository {
  
  async getProducts(): Promise<Array<IProduct>> {
    return await prisma.product.findMany({
      include: {
        Category: true,
      },
    })    
  }

  async getOneProduct(id: number): Promise<Array<IProduct>> {
    return await prisma.product.findMany({
      where: { id },
      include: {
        Category: true,
      },
    })
  }

  async createProduct(createProductDto: CreateProductDto): Promise<IProduct> {
    const code = randomUUID();
    return await prisma.product.create({
      data: {
        name: createProductDto.name,
        code,
        quantity: createProductDto.quantity,
        is_active: createProductDto.is_active,
        categoryId: createProductDto.categoryId
      }
    });
  }

  async updateProduct(updateProductDto: UpdateProductDto, id: number): Promise<IProduct>{
    return await prisma.product.update({
      where: { id },
      data: updateProductDto
    })
  }

  async deleteProduct(id: number): Promise<any>{
    return await prisma.product.delete({
      where: { id }
    })
  }

}
