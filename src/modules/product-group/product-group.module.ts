import { Module } from '@nestjs/common';
import { ProductGroupService } from './product-group.service';
import { ProductGroupResolver } from './product-group.resolver';

@Module({
  providers: [ProductGroupResolver, ProductGroupService],
})
export class ProductGroupModule {}
