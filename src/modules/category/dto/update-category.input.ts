import { CreateCategoryInput } from './create-category.input';
import { ArgsType, Field, Int, PartialType } from '@nestjs/graphql';

@ArgsType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field(() => Int)
  id: number;
}
