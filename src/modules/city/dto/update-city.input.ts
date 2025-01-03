import { CreateCityInput } from './create-city.input';
import { ArgsType, Field, Int, PartialType } from '@nestjs/graphql';

@ArgsType()
export class UpdateCityInput extends PartialType(CreateCityInput) {
  @Field(() => Int)
  id: number;
}
