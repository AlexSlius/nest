import { ArgsType, Field, Int, PartialType } from "@nestjs/graphql";
import { CreateComposition } from "./create-composition.input";

@ArgsType()
export class UpdateComposition extends PartialType(CreateComposition) {
    @Field(() => Int)
    id: number
}