import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ColorService } from './color.service';
import { UseGuards } from '@nestjs/common';
import { Color } from './entities/color.entity';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { CreateColor } from './dto/create-color.input';
import { UpdateColor } from './dto/update-color.input';

@Resolver(() => Color)
@UseGuards(AuthGuard)
export class ColorResolver {
  constructor(private readonly colorService: ColorService) { }

  @Mutation(() => Color, { name: 'createColor' })
  createColor(@Args() ureateColor: CreateColor) {
    return this.colorService.create(ureateColor)
  }

  @Query(() => [Color], { name: 'colors' })
  findAll() {
    return this.colorService.findAll();
  }

  @Query(() => Color, { name: 'color' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.colorService.findOne(id);
  }

  @Mutation(() => Color, { name: 'updateColor' })
  update(@Args() updateColor: UpdateColor) {
    return this.colorService.update(updateColor.id, updateColor)
  }

  @Mutation(() => Color, { name: 'deleteColor' })
  delete(@Args('id', { type: () => Int }) id: number) {
    return this.colorService.delete(id);
  }
}
