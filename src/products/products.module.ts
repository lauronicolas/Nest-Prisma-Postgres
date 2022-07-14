import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductRepository } from './products.repository';
import { ProductService } from './products.service';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductService, ProductRepository],
})
export class ProductModule {}
