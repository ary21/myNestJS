import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../db/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(createUserDto);

    return this.usersRepository.save(newUser);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find({
      relations: ['pets'],
    });
  }

  async findOne(id: number): Promise<User> {
    // const user = await this.usersRepository
    //   .createQueryBuilder('user')
    //   .leftJoinAndSelect('pets', 'id', 'name')
    //   .where('id = :id', { id })
    //   .getOne();

    const user = await this.usersRepository.findOne(id, {
      relations: ['pets'],
    });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);

    this.usersRepository.merge(user, updateUserDto);

    return this.usersRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);

    this.usersRepository.softRemove(user);
  }
}
