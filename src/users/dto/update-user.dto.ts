import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MinLength } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsAlphanumeric()
  @MinLength(10)
  name: string;

  @ApiProperty()
  @IsAlphanumeric()
  @MinLength(10)
  password: string;
}
