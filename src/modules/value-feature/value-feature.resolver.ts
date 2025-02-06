import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ValueFeatureService } from './value-feature.service';

import { ValueFeature as ValueFeatureGraph } from "./entities/value-feature.entity"
import { CreateValueFeatureInput } from './dto/create-value-fature.input';
import { UpdateValueFaatureInput } from './dto/update-value-fature.input';
import { ValueFeature } from '@prisma/client';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Resolver(() => ValueFeatureGraph)
@UseGuards(AuthGuard)
export class ValueFeatureResolver {
  constructor(private readonly valueFeatureService: ValueFeatureService) { }

  @Mutation(() => ValueFeatureGraph, { name: 'createValueFeature' })
  crate(@Args() dataInput: CreateValueFeatureInput): Promise<ValueFeature> {
    return this.valueFeatureService.create(dataInput)
  }

  @Query(() => [ValueFeatureGraph], { name: 'valueFeatures' })
  fileAll(): Promise<ValueFeature[]> {
    return this.valueFeatureService.fildAll();
  }

  @Query(() => ValueFeatureGraph, { name: 'valueFeature' })
  fileOne(@Args('id', { type: () => Int }) id: number): Promise<ValueFeature> {
    return this.valueFeatureService.findOne(id);
  }

  @Query(() => ValueFeatureGraph, { name: 'updateFeature' })
  update(@Args() dataValue: UpdateValueFaatureInput): Promise<ValueFeature> {
    return this.valueFeatureService.update(dataValue.id, dataValue)
  }

  @Query(() => ValueFeatureGraph, { name: 'deleteFeatures' })
  remove(@Args('id', { type: () => Int }) id: number): Promise<ValueFeature> {
    return this.valueFeatureService.delete(id)
  }
}
