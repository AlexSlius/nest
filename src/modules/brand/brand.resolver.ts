import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BrandService } from './brand.service';

import { Brand } from './entities/brand.entity';
import { CreateBrand } from './dto/brand-create.input';
import { UpdateBrand } from './dto/brand-update.input';

@Resolver(() => Brand)
export class BrandResolver {
  constructor(private readonly brandService: BrandService) { }

  @Mutation(() => Brand, { name: 'createBrand' })
  createBrand(@Args() createInput: CreateBrand) {
    return this.brandService.create(createInput);
  }

  @Query(() => [Brand], { name: 'brands' })
  findAll() {
    return this.brandService.findAll();
  }

  @Query(() => Brand, { name: 'brand' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.brandService.findOne(id)
  }

  @Mutation(() => Brand, { name: 'updateBrand' })
  update(@Args() updateInput: UpdateBrand) {
    return this.brandService.update(updateInput.id, updateInput);
  }

  @Mutation(() => Brand, { name: 'deleteBrand' })
  remove(@Args('id', { type: () => Int }) id: number) {
    return this.brandService.deleteOne(id);
  }
}
