import { Resolver } from '@nestjs/graphql';
import { BrandService } from './brand.service';

@Resolver()
export class BrandResolver {
  constructor(private readonly brandService: BrandService) {}
}
