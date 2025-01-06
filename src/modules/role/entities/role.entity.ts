import { ObjectType, Field, Int } from '@nestjs/graphql';

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
}

@ObjectType()
export class Role {
  @Field(() => Int)
  id: number

  @Field(() => String, { nullable: true })
  name: string

  @Field(() => Boolean, { nullable: true })
  active: boolean

  @Field(() => [Permission])
  permissions: Permission[]
}
