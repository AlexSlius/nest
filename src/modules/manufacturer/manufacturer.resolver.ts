import { Args, Mutation, Resolver, Query, Int } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { AuthGuard } from 'src/common/guards/auth.guard';

import { ManufacturerService } from './manufacturer.service';
import { Manufacture } from "./entities/manufacture.entity"
import { Createmanufacture } from './dto/create-manufacture.input';
import { UpdateManufacture } from './dto/update-manufacture.input';


@Resolver(() => Manufacture)
@UseGuards(AuthGuard)
export class ManufacturerResolver {
  constructor(private readonly manufacturerService: ManufacturerService) { }

  @Mutation(() => Manufacture, { name: 'createManufacture' })
  create(@Args() createInput: Createmanufacture) {
    return this.manufacturerService.create(createInput);
  }

  @Query(() => [Manufacture], { name: 'manufactures' })
  findAll() {
    return this.manufacturerService.findAll();
  }

  @Query(() => Manufacture, { name: 'manufacture' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.manufacturerService.findOne(id);
  }

  @Mutation(() => Manufacture, { name: 'updateManufacture' })
  update(@Args() updateInput: UpdateManufacture) {
    return this.manufacturerService.update(updateInput.id, updateInput);
  }

  @Mutation(() => Manufacture, { name: 'deleteManufacture' })
  remove(@Args('id', { type: () => Int }) id: number) {
    return this.manufacturerService.delete(id);
  }
}
