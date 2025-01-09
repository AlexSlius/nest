import { ObjectType, Field, Int } from '@nestjs/graphql';

import { User } from './user.entity';
import { MetaPagination } from 'src/entitys/meta-pagination.entity';

@ObjectType()
export class Users {
    @Field(() => [User])
    data: User[]

    @Field(() => MetaPagination)
    meta: MetaPagination
}