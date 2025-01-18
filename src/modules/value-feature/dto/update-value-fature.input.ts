import { Field, PartialType, Int, ArgsType } from "@nestjs/graphql";
import { CreateValueFeatureInput } from "./create-value-fature.input";

@ArgsType()
export class UpdateValueFaatureInput extends PartialType(CreateValueFeatureInput) {
    @Field(() => Int)
    id: number
}