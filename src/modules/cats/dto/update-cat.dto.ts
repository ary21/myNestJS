import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MinLength } from 'class-validator';
import { CreateCatDto } from './create-cat.dto';

export class UpdateCatDto extends PartialType(CreateCatDto) {
  @ApiProperty()
  @IsAlphanumeric()
  @MinLength(10)
  name: string;

  @ApiProperty({ required: false })
  code?: string;
}
