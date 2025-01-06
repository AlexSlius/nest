import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class TypesRequest {
    @Field(() => String)
    key: string

    @Field(() => String, { nullable: true })
    name: string

    @Field(() => String, { nullable: true })
    description: string
}