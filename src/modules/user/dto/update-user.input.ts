import { CreateUserInput } from './create-user.input';
import { ArgsType, Field, Int, PartialType } from '@nestjs/graphql';

@ArgsType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int)
  id: number;
}
