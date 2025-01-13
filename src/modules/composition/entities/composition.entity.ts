import { Field, Int, ObjectType } from "@nestjs/graphql"

import { City } from "src/modules/city/entities/city.entity"

@ObjectType()
export class Composition {
    @Field(() => Int)
    id: number

    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => Boolean, { nullable: true })
    active?: boolean

    @Field(() => City, { nullable: true })
    city?: City
}