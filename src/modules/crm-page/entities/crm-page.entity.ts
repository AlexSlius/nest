import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class CrmPage {
    @Field(() => String, { nullable: true })
    key: string;

    @Field(() => String, { nullable: true })
    url: string;

    @Field(() => String, { nullable: true })
    name: string;

    @Field(() => String, { nullable: true })
    description: string;
    
    @Field(() => String, { nullable: true })
    active: boolean;
}