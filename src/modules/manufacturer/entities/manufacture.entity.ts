import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Manufacture {
    @Field(() => Int)
    id: number

    @Field(() => String, { nullable: true })
    name?: string
}