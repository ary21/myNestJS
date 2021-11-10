import { CreateProductInput } from './create-product.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MinLength } from 'class-validator';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @IsAlphanumeric()
  @MinLength(5)
  name: string;

  @ApiProperty()
  @IsAlphanumeric()
  description: string;
}
