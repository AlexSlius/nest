import { Int, Field, ArgsType, InputType } from '@nestjs/graphql';

import { Pagination } from "../../../dto/pagination.input";

@InputType()
class Filter {
    @Field(() => String, {nullable: true})
    email?: string

    @Field(() => String, {nullable: true})
    phone?: string

    @Field(() => String, {nullable: true})
    name?: string

    @Field(() => Int, {nullable: true})
    cityId?: number

    @Field(() => Boolean, {nullable: true})
    active?: boolean
}

@ArgsType()
export class ParamsGetAll {
    @Field(() => Pagination, {nullable: true})
    pagination?: Pagination

    @Field(() => Filter, {nullable: true})
    filter?: Filter
}