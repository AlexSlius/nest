import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class CreateBrand {
    @Field(() => String)
    name: string

    @Field(() => Boolean, { nullable: true })
    active?: boolean
}