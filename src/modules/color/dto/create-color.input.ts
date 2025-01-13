import { ArgsType, Field } from "@nestjs/graphql"

@ArgsType()
export class CreateColor {
    @Field(() => String)
    name: string

    @Field(() => String)
    color: string

    @Field(() => Boolean, { nullable: true, defaultValue: true })
    active?: boolean
}