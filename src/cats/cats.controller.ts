import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@ApiTags('Cats API')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiCreatedResponse({ type: Cat, description: 'submit new data' })
  @Post()
  create(@Body() createCatDto: CreateCatDto): Cat {
    return this.catsService.create(createCatDto);
  }

  @ApiOkResponse({ type: Cat, isArray: true, description: 'desc get all data' })
  @ApiQuery({ name: 'name', required: false })
  @Get()
  findAll(@Query('name') name: string): Cat[] {
    return this.catsService.findAll(name);
  }

  @ApiOkResponse({ type: Cat, isArray: false, description: 'find data by id' })
  @ApiNotFoundResponse()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Cat {
    const cat = this.catsService.findOne(id);

    if (!cat) {
      throw new NotFoundException();
    }

    return cat;
  }

  @ApiOkResponse({
    type: Cat,
    isArray: false,
    description: 'update data by id',
  })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCatDto: UpdateCatDto,
  ) {
    return this.catsService.update(id, updateCatDto);
  }

  @ApiNoContentResponse()
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.remove(id);
  }
}
