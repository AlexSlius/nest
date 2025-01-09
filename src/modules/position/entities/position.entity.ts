import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Position {
    @Field(() => Int)
    id: number

    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => Boolean, { nullable: true })
    active?: boolean
} 