import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsAlpha, MinLength } from 'class-validator';

@InputType()
export class CreateProductInput {
  @ApiProperty()
  @IsAlpha()
  @MinLength(5)
  @Field()
  name: string;

  @ApiProperty()
  @IsOptional()
  @Field()
  description: string;
}
