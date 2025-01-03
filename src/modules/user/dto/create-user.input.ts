import { Int, Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  middleName: string

  @Field()
  surname: string

  @Field({nullable: true})
  active: boolean

  @Field()
  phone: string

  @Field()
  email: string

  @Field()
  password: string

  @Field(() => Int)
  cityId: number;

  @Field(() => Int)
  roleId: number;

  @Field(() => Int)
  placeId: number;

  @Field(() => Int)
  positionid: number;
}
