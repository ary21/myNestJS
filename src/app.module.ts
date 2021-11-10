import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import config from '../ormconfig';

import { CatsModule } from './modules/cats/cats.module';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/database/schema.gql'),
    }),
    CatsModule, // NOTE > learn basic nest module
    UsersModule, // NOTE > module learn basic crud
    ProductsModule, // NOTE > module learn basic GraphQL
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
