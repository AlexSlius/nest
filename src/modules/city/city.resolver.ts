import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CityService } from './city.service';
import { City } from './entities/city.entity';
import { CreateCityInput } from './dto/create-city.input';
import { UpdateCityInput } from './dto/update-city.input';
import { AuthGuard } from '../../common/guards/auth.guard';


@Resolver(() => City)
@UseGuards(AuthGuard)
export class CityResolver {
  constructor(private readonly cityService: CityService) { }

  @Mutation(() => City, { name: 'createCity' })
  createCity(@Args() args: CreateCityInput) {
    return this.cityService.create(args);
  }

  @Query(() => [City], { name: 'cities' })
  findAll() {
    return this.cityService.findAll();
  }

  @Query(() => City, { name: 'city' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cityService.findOne(id);
  }

  @Mutation(() => Boolean, { name: 'updateCity' })
  updateCity(@Args() args: UpdateCityInput) {
    return this.cityService.update(args.id, args);
  }

  @Mutation(() => Boolean, { name: 'deleteCity' })
  removeCity(@Args('id', { type: () => Int }) id: number) {
    return this.cityService.remove(id);
  }
}
