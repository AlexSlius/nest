import { Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { TypesRequestService } from './types-request.service';
import { TypesRequest } from './entities/types-request.entity';
import { AuthGuard } from '../../common/guards/auth.guard';

@Resolver()
@UseGuards(AuthGuard)
export class TypesRequestResolver {
  constructor(private readonly typesRequestService: TypesRequestService) { }

  @Query(() => [TypesRequest], { name: 'typesRequests' })
  findAll() {
    return this.typesRequestService.findAll();
  }
}
