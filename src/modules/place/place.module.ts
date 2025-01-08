import { Module } from '@nestjs/common';
import { PlaceService } from './place.service';
import { PlaceResolver } from './place.resolver';

@Module({
  providers: [PlaceResolver, PlaceService],
})

export class PlaceModule { }
