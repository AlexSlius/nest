import { Field, Int, ObjectType } from "@nestjs/graphql";

import { Feature } from "../../feature/entities/feature.entity"

@ObjectType()
export class ValueFeature {
    @Field(() => Int)
    id: number

    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => Boolean, { nullable: true })
    active?: boolean

    @Field(() => Feature, { nullable: true })
    feature?: Feature
}