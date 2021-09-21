import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric()
  @MinLength(10)
  name: string;

  @ApiProperty()
  @IsAlphanumeric()
  @MinLength(10)
  password: string;
}
