import { Query, Resolver } from '@nestjs/graphql';
import { TypesRequestService } from './types-request.service';
import { TypesRequest } from './entities/types-request.entity';

@Resolver()
export class TypesRequestResolver {
  constructor(private readonly typesRequestService: TypesRequestService) { }

  @Query(() => [TypesRequest], { name: 'typesRequests' })
  findAll() {
    return this.typesRequestService.findAll();
  }
}
