import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(() => Int)
  id: number

  @Field(() => String, { nullable: true })
  name?: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  active?: boolean

  @Field(() => Int, { nullable: true })
  parentId?: number

  @Field(() => [Category], { nullable: true })
  children?: Category[];
}
