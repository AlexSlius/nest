import { ArgsType, Int, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateCategoryInput {
  @Field()
  name: string

  @Field({ nullable: true })
  description: string

  @Field(() => Int, { nullable: true })
  parentId?: number

  @Field({ nullable: true })
  active?: boolean
}
