import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private cats: Cat[] = [
    { id: 1, name: 'Billy' },
    { id: 2, name: 'Kitty' },
  ];

  create(createCatDto: CreateCatDto): Cat {
    const newCat: Cat = { id: Date.now(), ...createCatDto };

    this.cats.push(newCat);

    return newCat;
  }

  findAll(name?: string): Cat[] {
    if (name) {
      return this.cats.filter((cat) => cat.name === name);
    }
    return this.cats;
  }

  findOne(id: number): Cat {
    return this.cats.find((cat) => cat.id === id);
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    const cat = this.cats.find((cat) => cat.id === id);

    if (!cat) {
      throw new NotFoundException();
    }

    this.cats = [
      ...this.cats.filter((cat) => cat.id !== id),
      { id, ...updateCatDto },
    ];

    return this.cats;
  }

  remove(id: number) {
    this.cats = [...this.cats.filter((cat) => cat.id !== id)];

    return;
  }
}
