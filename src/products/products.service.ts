import { Injectable } from '@nestjs/common';

import { IProduct } from 'src/interface/product.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductService {

  constructor(private productRepository: ProductRepository) {}

  async getProducts(): Promise<Array<IProduct>> {
    return await this.productRepository.getProducts();
  }

  async getOneProduct(id: string): Promise<Array<IProduct>> {
    return await this.productRepository.getOneProduct(Number(id));
  }

  async createProduct(createProductDto: CreateProductDto): Promise<IProduct> {
    return await this.productRepository.createProduct(createProductDto);
  }

  async updateProduct(updateProductDto: UpdateProductDto, id: string): Promise<IProduct> {
    return await this.productRepository.updateProduct(updateProductDto, Number(id));
  }

  async deleteProduct(id: string): Promise<any>{
    return await this.productRepository.deleteProduct(Number(id));
  }
}
