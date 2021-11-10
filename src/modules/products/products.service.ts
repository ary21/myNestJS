import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from '../../database/entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  create(createProductInput: CreateProductInput): Promise<Product> {
    const newProduct = this.productRepository.create(createProductInput);

    return this.productRepository.save(newProduct);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException();
    }

    return product;
  }

  async update(id: number, updateProductInput: UpdateProductInput): Promise<Product>{
    const product = await this.findOne(id);

    this.productRepository.merge(product, updateProductInput);
    return this.productRepository.save(product);
  }

  async remove(id: number): Promise<void>{
    const product = await this.findOne(id);

    await this.productRepository.softRemove(product);
  }
}
