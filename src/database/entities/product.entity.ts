import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @ApiProperty()
  @Column()
  @Field()
  name: string;
  
  @ApiProperty()
  @Column()
  @Field()
  description: string;

  @CreateDateColumn({
    default: () => 'CURRENT_TIMESTAMP',
  })
  creationAt: Date;

  @UpdateDateColumn({
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
