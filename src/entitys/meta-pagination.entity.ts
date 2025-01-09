import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MetaPagination {
    @Field(() => Int, { nullable: true })
    limit?: number

    @Field(() => Int, { nullable: true })
    page: number

    @Field(() => Int, { nullable: true })
    total: number

    @Field(() => Int, { nullable: true })
    lastPage: number
}