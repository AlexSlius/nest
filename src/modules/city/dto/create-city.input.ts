import { ArgsType, Field } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@ArgsType()
export class CreateCityInput {
  @IsString()
  @Field({ description: 'Назва міста.' })
  @MinLength(3)
  name: string;

  @Field({ nullable: true })
  lat?: number;

  @Field({ nullable: true })
  lng?: number;

  @Field({ nullable: true })
  active?: boolean;
}
