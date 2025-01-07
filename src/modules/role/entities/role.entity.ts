import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
class permissionPage {
  @Field(() => Int)
  id: number

  @Field(() => String, { nullable: true })
  key?: string

  @Field(() => String, { nullable: true })
  url?: string

  @Field(() => Boolean, { nullable: true })
  active?: boolean

  @Field(() => Int)
  roleId: number
}

@ObjectType()
class Permission {
  @Field(() => Int)
  id: number

  @Field(() => String, { nullable: true })
  resource?: string

  @Field(() => Boolean, { nullable: true })
  active?: boolean

  @Field(() => Boolean, { nullable: true })
  allowedCreate?: boolean

  @Field(() => Boolean, { nullable: true })
  allowedUpdate?: boolean

  @Field(() => Boolean, { nullable: true })
  allowedDelete?: boolean

  @Field(() => Boolean, { nullable: true })
  allowedGetOne?: boolean

  @Field(() => Boolean, { nullable: true })
  allowedGetAll?: boolean

  @Field(() => Int)
  roleId: number
}

@ObjectType()
export class Role {
  @Field(() => Int)
  id: number

  @Field(() => String, { nullable: true })
  name: string

  @Field(() => Boolean, { nullable: true })
  active: boolean

  @Field(() => [Permission], { nullable: true })
  permissions: Permission[]

  @Field(() => [permissionPage], { nullable: true })
  permissionPages: permissionPage
}
