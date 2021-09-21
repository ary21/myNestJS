import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MinLength } from 'class-validator';

export class CreateCatDto {
  @ApiProperty()
  @IsAlphanumeric()
  @MinLength(10)
  name: string;

  @ApiProperty({ required: false })
  code?: string;
}
