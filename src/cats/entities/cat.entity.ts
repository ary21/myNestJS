import { ApiProperty } from '@nestjs/swagger';

export class Cat {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  code?: string;
}
