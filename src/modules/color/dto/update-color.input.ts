import { ArgsType, Field, PartialType, Int } from "@nestjs/graphql"

import { CreateColor } from "./create-color.input"

@ArgsType()
export class UpdateColor extends PartialType(CreateColor) {
    @Field(() => Int)
    id: number
}