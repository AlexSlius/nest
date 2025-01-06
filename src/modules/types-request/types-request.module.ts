import { Module } from '@nestjs/common';
import { TypesRequestService } from './types-request.service';
import { TypesRequestResolver } from './types-request.resolver';

@Module({
  providers: [TypesRequestResolver, TypesRequestService],
})
export class TypesRequestModule {}
