import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class CreateProductGroup {
    @Field(() => String)
    name: string
}