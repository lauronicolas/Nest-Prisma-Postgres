import { Controller, Get, Query, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ListAllProductsDto } from './dto/list-all-products.dto';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {

  constructor(private productService: ProductService) {}
  
  @Get()
  findAll(@Query() query: ListAllProductsDto) {
    return this.productService.getProducts();
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productService.createProduct(createProductDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productService.getOneProduct(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return await this.productService.updateProduct(updateProductDto, id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.productService.deleteProduct(id);
  }

}