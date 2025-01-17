import { ArgsType, Field, Int, PartialType } from "@nestjs/graphql";
import { Createmanufacture } from "./create-manufacture.input";

@ArgsType()
export class UpdateManufacture extends PartialType(Createmanufacture) {
    @Field(() => Int)
    id: number
}