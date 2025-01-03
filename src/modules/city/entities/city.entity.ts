import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class City {
  @Field(() => Int)
  id: number;

  @Field({
    description: `Назва міста`,
    nullable: true
  })
  name: string;

  @Field(
    () => Float,
    {
      description: `Широта`,
      nullable: true
    })
  lat: string;

  @Field(
    () => Float,
    {
      description: `Довгота`,
      nullable: true
    })
  lng: string;

  @Field({
    description: `Активне не активне місто true/false`,
    nullable: true
  })
  active: boolean
}
