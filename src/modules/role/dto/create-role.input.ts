import { ArgsType, InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePermissionInput {
  @Field(() => String)
  resource: string

  @Field(() => Boolean, { nullable: true })
  active: boolean

  @Field(() => Boolean)
  allowedCreate: boolean

  @Field(() => Boolean)
  allowedUpdate: boolean

  @Field(() => Boolean)
  allowedDelete: boolean

  @Field(() => Boolean)
  allowedGetOne: boolean

  @Field(() => Boolean)
  allowedGetAll: boolean
}

@ArgsType()
export class CreateRoleInput {
  @Field(() => String)
  name: string

  @Field(() => Boolean, { nullable: true })
  active?: boolean

  @Field(() => [CreatePermissionInput])
  permissions: CreatePermissionInput[]
}
