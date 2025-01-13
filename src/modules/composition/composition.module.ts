import { Module } from '@nestjs/common';
import { CompositionService } from './composition.service';
import { CompositionResolver } from './composition.resolver';

@Module({
  providers: [CompositionResolver, CompositionService],
})
export class CompositionModule {}
