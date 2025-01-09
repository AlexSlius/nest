import { ArgsType, Field, Int, PartialType } from '@nestjs/graphql';

import { CreatePlace } from "./create-place.input";

@ArgsType()
export class UpdatePlace extends PartialType(CreatePlace) {
  @Field(() => Int)
  id: number;
}