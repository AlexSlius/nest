import { Args, ArgsType, Field, Int, PartialType } from "@nestjs/graphql";
import { CreateBrand } from "./brand-create.input";

@ArgsType()
export class UpdateBrand extends PartialType(CreateBrand) {
    @Field(() => Int)
    id: number
}