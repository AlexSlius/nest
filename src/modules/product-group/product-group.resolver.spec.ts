import { Test, TestingModule } from '@nestjs/testing';
import { ProductGroupResolver } from './product-group.resolver';
import { ProductGroupService } from './product-group.service';

describe('ProductGroupResolver', () => {
  let resolver: ProductGroupResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductGroupResolver, ProductGroupService],
    }).compile();

    resolver = module.get<ProductGroupResolver>(ProductGroupResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
