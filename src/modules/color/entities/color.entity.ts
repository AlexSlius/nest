import { ObjectType, Int, Field } from "@nestjs/graphql";

@ObjectType()

export class Color {
    @Field(() => Int)
    id: number

    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => String, { nullable: true })
    color?: string

    @Field(() => Boolean, { nullable: true })
    active?: boolean
}