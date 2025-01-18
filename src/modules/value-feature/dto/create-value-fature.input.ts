import { ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
export class CreateValueFeatureInput {
    @Field(() => String)
    name: string

    @Field(() => Boolean, { nullable: true, defaultValue: true })
    active?: boolean

    @Field(() => Int)
    featureId: number
}