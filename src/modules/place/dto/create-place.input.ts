import { Args, ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
export class CreatePlace {
    @Field(() => String)
    name: string

    @Field(() => Int)
    cityId: number

    @Field(() => String, { nullable: true })
    address?: string
}