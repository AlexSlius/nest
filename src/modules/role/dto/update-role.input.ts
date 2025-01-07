import { CreateRoleInput, CreatePermissionInput, CreatePermissionPage } from './create-role.input';
import { ArgsType, Field, Int, PartialType, InputType } from '@nestjs/graphql';

@InputType()
class UpdatePermissionPage extends CreatePermissionPage {
  @Field(() => Int, { nullable: true, description: 'id - якщо додаємо нову то id:null' })
  id: number | null;

  @Field(() => Int, { description: 'roleId - це id самоъ ролі' })
  roleId: number;
}

@InputType()
class UpdatePermissionInput extends CreatePermissionInput {
  @Field(() => Int, { nullable: true, description: 'id - якщо додаємо нову то id:null' })
  id: number | null;

  @Field(() => Int, { description: 'roleId - це id самої ролі' })
  roleId: number;
}

@ArgsType()
export class UpdateRoleInput extends PartialType(CreateRoleInput) {
  @Field(() => Int)
  id: number;

  @Field(() => [UpdatePermissionInput], { nullable: true })
  permissions?: UpdatePermissionInput[]

  @Field(() => [UpdatePermissionPage], { nullable: true })
  permissionPages: UpdatePermissionPage[]
}
