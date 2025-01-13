import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CompositionService } from './composition.service';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { UseGuards } from '@nestjs/common';
import { Composition } from './entities/composition.entity';
import { CreateComposition } from './dto/create-composition.input';
import { UpdateComposition } from './dto/update-composition.input';

@Resolver(() => Composition)
@UseGuards(AuthGuard)
export class CompositionResolver {
  constructor(private readonly compositionService: CompositionService) { }

  @Mutation(() => Composition, { name: 'createComposition' })
  createComposition(@Args() createInpyt: CreateComposition) {
    return this.compositionService.create(createInpyt)
  }

  @Query(() => [Composition], { name: 'compositions' })
  findAll() {
    return this.compositionService.findAll()
  }

  @Query(() => Composition, { name: 'composition' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.compositionService.findOne(id)
  }

  @Mutation(() => Composition, { name: 'updateComposition' })
  update(@Args() updateComposition: UpdateComposition) {
    return this.compositionService.update(updateComposition.id, updateComposition)
  }

  @Mutation(() => Composition, { name: 'deleteComposition' })
  remove(@Args('id', { type: () => Int }) id: number) {
    return this.compositionService.delete(id)
  }
}
