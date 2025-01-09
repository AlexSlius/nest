import { Int, ArgsType, Field, PartialType } from "@nestjs/graphql";

import { CreatePosiition } from "./create-position.input";

@ArgsType()
export class UpdatePosition extends PartialType(CreatePosiition) {
    @Field(() => Int)
    id: number
}