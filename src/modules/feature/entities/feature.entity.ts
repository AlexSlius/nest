import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Feature {
  @Field(() => Int)
  id: number

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => Boolean, { nullable: true })
  active?: boolean
}
