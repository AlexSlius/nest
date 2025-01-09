import { ObjectType, Field, Int } from '@nestjs/graphql';

import { City } from 'src/modules/city/entities/city.entity';

@ObjectType()
export class Place {
    @Field(() => Int)
    id: number

    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => Int, { nullable: true })
    cityId?: number

    @Field(() => String, { nullable: true })
    address?: string

    @Field(() => City, { nullable: true })
    city?: City
}