import { ObjectType, Field, Int } from '@nestjs/graphql';

import { User } from "../../user/entities/user.entity"

@ObjectType()
export class Login {
    @Field(() => String)
    token: string

    @Field(() => User)
    user: User
}