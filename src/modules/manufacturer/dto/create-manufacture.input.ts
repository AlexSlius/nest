import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class Createmanufacture {
    @Field(() => String)
    name: string
}