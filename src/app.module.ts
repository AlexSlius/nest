import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaModule } from '../prisma/prisma.module';
import { CityModule } from './modules/city/city.module';
import { UserModule } from './modules/user/user.module';
import { APP_FILTER } from '@nestjs/core';
import { PrismaGraphQLExceptionFilter } from './common/filters/prisma-graphql-exception.filter';
import { CategoryModule } from './modules/category/category.module';
import { RoleModule } from './modules/role/role.module';
import { TypesRequestModule } from './modules/types-request/types-request.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql', // Automatically generated
      sortSchema: true,
      playground: true,
    }),
    PrismaModule,
    CityModule,
    UserModule,
    CategoryModule,
    RoleModule,
    TypesRequestModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: PrismaGraphQLExceptionFilter,
    },
  ],
})

export class AppModule { }
