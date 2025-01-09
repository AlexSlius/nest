import { ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
export class CreatePosiition {
    @Field(() => String)
    name: string

    @Field(() => Boolean, { nullable: true })
    active?: boolean
} 