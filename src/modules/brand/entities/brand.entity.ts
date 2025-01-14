import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class Brand {
    @Field(() => Int)
    id: number

    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => Boolean, { nullable: true })
    active?: boolean
}