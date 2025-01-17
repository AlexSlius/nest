import { Int, Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class CreateFeatureInput {
  @Field(() => String)
  name: string

  @Field(() => Boolean, { nullable: true, defaultValue: true  })
  active?: boolean
}
