import { ObjectType, Field, Int } from '@nestjs/graphql';
import { City } from '../../city/entities/city.entity';
import { Role } from "../../role/entities/role.entity";
import { Place } from "../../place/entities/place.entity";
import { Position } from "../../position/entities/position.entity";

@ObjectType()
export class User {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  middleName?: String

  @Field({ nullable: true })
  surname?: String

  @Field({ nullable: true })
  active?: Boolean

  @Field({ nullable: true })
  phone?: String

  @Field({ nullable: true })
  email?: String

  @Field(() => City, { nullable: true })
  city?: City;

  @Field(() => Role, { nullable: true })
  role?: Role;

  @Field(() => Place, { nullable: true })
  place?: Place

  @Field(() => Position, { nullable: true })
  position?: Position
}
