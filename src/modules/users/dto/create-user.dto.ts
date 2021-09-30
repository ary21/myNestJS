import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric()
  name: string;

  @ApiProperty()
  @IsAlphanumeric()
  @MinLength(5)
  password: string;
}
