import { Module } from '@nestjs/common';
import { ProductModule } from './products/products.module';
import { CategoryModule } from './category/categories.module';


@Module({
  imports: [ProductModule, CategoryModule],
})
export class AppModule {}
