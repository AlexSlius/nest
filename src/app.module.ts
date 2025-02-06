import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaModule } from '../prisma/prisma.module';
import { CityModule } from './modules/city/city.module';
import { UserModule } from './modules/user/user.module';
import { APP_FILTER } from '@nestjs/core';
import { PrismaGraphQLExceptionFilter } from './common/filters/prisma-graphql-exception.filter';
import { CategoryModule } from './modules/category/category.module';
import { RoleModule } from './modules/role/role.module';
import { TypesRequestModule } from './modules/types-request/types-request.module';
import { CrmPagesModule } from './modules/crm-page/crm-page.module';
import { AuthModule } from './modules/auth/auth.module';
import { PlaceModule } from './modules/place/place.module';
import { PositionModule } from './modules/position/position.module';
import { CompositionModule } from './modules/composition/composition.module';
import { BrandModule } from './modules/brand/brand.module';
import { ProductGroupModule } from './modules/product-group/product-group.module';
import { ColorModule } from './modules/color/color.module';
import { ManufacturerModule } from './modules/manufacturer/manufacturer.module';
import { FeatureModule } from './modules/feature/feature.module';
import { ValueFeatureModule } from './modules/value-feature/value-feature.module';
import { UploadImageModule } from './modules/upload-image/upload-image.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql', // Automatically generated
      sortSchema: true,
      playground: true,
      context: ({ req }) => ({ headers: req.headers }), // Putting Headlines into Context
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET, // replace with your secret phrase
      signOptions: { expiresIn: '240h' }, // token expiration date
    }),
    PrismaModule,
    CityModule,
    UserModule,
    CategoryModule,
    RoleModule,
    TypesRequestModule,
    CrmPagesModule,
    AuthModule,
    PlaceModule,
    PositionModule,
    CompositionModule,
    BrandModule,
    ProductGroupModule,
    ColorModule,
    ManufacturerModule,
    FeatureModule,
    ValueFeatureModule,
    UploadImageModule,
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
