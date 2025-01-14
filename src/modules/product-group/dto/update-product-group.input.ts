import { Field, PartialType, Int, ArgsType } from "@nestjs/graphql";

import { CreateProductGroup } from "./create-product-group.input";

@ArgsType()
export class UpdateProducGroup extends PartialType(CreateProductGroup) {
    @Field(() => Int)
    id: number
}