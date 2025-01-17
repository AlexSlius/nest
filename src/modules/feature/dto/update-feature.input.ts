import { CreateFeatureInput } from './create-feature.input';
import { Field, Int, PartialType, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class UpdateFeatureInput extends PartialType(CreateFeatureInput) {
  @Field(() => Int)
  id: number;
}
