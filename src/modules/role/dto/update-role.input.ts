import { CreateRoleInput, CreatePermissionInput } from './create-role.input';
import { ArgsType, Field, Int, PartialType, InputType } from '@nestjs/graphql';

@InputType()
class UpdatePermissionInput extends CreatePermissionInput {
  @Field(() => Int)
  id: number;
}

@ArgsType()
export class UpdateRoleInput extends PartialType(CreateRoleInput) {
  @Field(() => Int)
  id: number;

  @Field(() => [UpdatePermissionInput], { nullable: true })
  permissions?: UpdatePermissionInput[]
}
