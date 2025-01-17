import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FeatureService } from './feature.service';
import { Feature } from './entities/feature.entity';
import { CreateFeatureInput } from './dto/create-feature.input';
import { UpdateFeatureInput } from './dto/update-feature.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Resolver(() => Feature)
@UseGuards(AuthGuard)
export class FeatureResolver {
  constructor(private readonly featureService: FeatureService) { }

  @Mutation(() => Feature, { name: 'createFeature' })
  createFeature(@Args() createFeatureInput: CreateFeatureInput) {
    return this.featureService.create(createFeatureInput);
  }

  @Query(() => [Feature], { name: 'features' })
  findAll() {
    return this.featureService.findAll();
  }

  @Query(() => Feature, { name: 'feature' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.featureService.findOne(id);
  }

  @Mutation(() => Feature, { name: 'updateFeature' })
  updateFeature(@Args() updateFeatureInput: UpdateFeatureInput) {
    return this.featureService.update(updateFeatureInput.id, updateFeatureInput);
  }

  @Mutation(() => Feature, { name: 'deleteFeature' })
  removeFeature(@Args('id', { type: () => Int }) id: number) {
    return this.featureService.remove(id);
  }
}
