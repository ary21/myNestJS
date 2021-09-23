import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MinLength } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsAlphanumeric()
  name: string;

  @ApiProperty()
  @IsAlphanumeric()
  @MinLength(5)
  password: string;
}
