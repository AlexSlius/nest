import { Module } from '@nestjs/common';
import { ValueFeatureService } from './value-feature.service';
import { ValueFeatureResolver } from './value-feature.resolver';

@Module({
  providers: [ValueFeatureResolver, ValueFeatureService],
})
export class ValueFeatureModule {}
