import { Args, Mutation, Query, Resolver, Int } from '@nestjs/graphql';
import { PositionService } from './position.service';

import { CreatePosiition } from "./dto/create-position.input";
import { UpdatePosition } from "./dto/update-pocition.input"
import { Position } from "./entities/position.entity";

@Resolver()
export class PositionResolver {
  constructor(private readonly positionService: PositionService) { }

  @Mutation(() => Position, { name: 'createPosition' })
  createPosition(@Args() args: CreatePosiition) {
    return this.positionService.create(args);
  }

  @Query(() => [Position], { name: 'positions' })
  findAll() {
    return this.positionService.fildAll();
  }

  @Query(() => Position, { name: 'position' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.positionService.findOne(id)
  }

  @Mutation(() => Position, { name: 'updatePosition' })
  update(@Args() args: UpdatePosition) {
    return this.positionService.update(args.id, args);
  }

  @Mutation(() => Position, { name: 'deletePosition' })
  delete(@Args('id', {type: () => Int}) id: number) {
    return this.positionService.delete(id);
  }
}
