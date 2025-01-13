import { ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
export class CreateComposition {
    @Field(() => String)
    name: string

    @Field(() => Boolean, { nullable: true, defaultValue: true })
    active?: boolean

    @Field(() => Int)
    cityId: number
}