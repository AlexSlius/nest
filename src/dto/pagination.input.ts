import { Int, Field, InputType } from '@nestjs/graphql';

@InputType()
export class Pagination {
  @Field(() => Int, { nullable: true, defaultValue: 1 })
  page?: number = 1;

  @Field(() => Int, { nullable: true, defaultValue: 10 })
  limit?: number = 10;
}
