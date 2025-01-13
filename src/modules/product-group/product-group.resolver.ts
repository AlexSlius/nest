import { Resolver } from '@nestjs/graphql';
import { ProductGroupService } from './product-group.service';

@Resolver()
export class ProductGroupResolver {
  constructor(private readonly productGroupService: ProductGroupService) {}
}
