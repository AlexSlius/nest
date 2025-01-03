import { ObjectType, Field, Int } from '@nestjs/graphql';
import { City } from '../../city/entities/city.entity';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  middleName: String   

  @Field({ nullable: true })
  surname: String

  @Field({ nullable: true })
  active: Boolean

  @Field({ nullable: true })
  phone: String  

  @Field({ nullable: true })
  email: String   

  @Field({ nullable: true })
  @Field(() => City)
  city: City;
}
