import { Args, Mutation, Query, Resolver, Int } from '@nestjs/graphql';
import { PlaceService } from './place.service';
import { UseGuards } from '@nestjs/common';
import { Place } from "./entities/place.entity"
import { CreatePlace } from "./dto/create-place.input";
import { UpdatePlace } from './dto/update-place.input';

import { AuthGuard } from '../../common/guards/auth.guard';

@Resolver()
@UseGuards(AuthGuard)
export class PlaceResolver {
  constructor(private readonly placeService: PlaceService) { }

  @Mutation(() => Place, { name: 'createPlace' })
  createPlace(@Args() args: CreatePlace) {
    return this.placeService.create(args);
  }

  @Query(() => [Place], { name: 'places' })
  findAll() {
    return this.placeService.findAll();
  }

  @Query(() => Place, { name: 'place' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.placeService.findOne(id)
  }

  @Mutation(() => Place, { name: 'updatePlace' })
  update(@Args() args: UpdatePlace) {
    return this.placeService.update(args.id, args)
  }

  @Mutation(() => Place, { name: 'deletePlace' })
  delete(@Args('id', { type: () => Int }) id: number) {
    return this.placeService.delete(id)
  }
}
