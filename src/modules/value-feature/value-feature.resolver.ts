import { Resolver } from '@nestjs/graphql';
import { ValueFeatureService } from './value-feature.service';

@Resolver()
export class ValueFeatureResolver {
  constructor(private readonly valueFeatureService: ValueFeatureService) {}
}
