import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductGroupService } from './product-group.service';

import { ProductGroup } from "./entities/product-group.entiti";
import { CreateProductGroup } from './dto/create-product-group.input';
import { UpdateProducGroup } from './dto/update-product-group.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/common/guards/auth.guard'

@Resolver(() => ProductGroup)
@UseGuards(AuthGuard)
export class ProductGroupResolver {
  constructor(private readonly productGroupService: ProductGroupService) { }

  @Mutation(() => ProductGroup, { name: 'createProducGroup' })
  createGroup(@Args() createInput: CreateProductGroup) {
    return this.productGroupService.create(createInput);
  }

  @Query(() => [ProductGroup], { name: 'producGroups' })
  findAll() {
    return this.productGroupService.findAll();
  }

  @Query(() => ProductGroup, { name: 'producGroup' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productGroupService.findOne(id)
  }

  @Mutation(() => ProductGroup, { name: 'updateProducGroup' })
  update(@Args() updateInput: UpdateProducGroup) {
    return this.productGroupService.update(updateInput.id, updateInput);
  }

  @Mutation(() => ProductGroup, { name: 'deleteProducGroup' })
  remove(@Args('id', { type: () => Int }) id: number) {
    return this.productGroupService.deleteOne(id);
  }
}
