import { Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CrmPageService } from './crm-page.service';
import { CrmPage } from './entities/crm-page.entity';
import { AuthGuard } from '../../common/guards/auth.guard';

@Resolver()
@UseGuards(AuthGuard)
export class CrmPageResolver {
  constructor(private readonly crmPageService: CrmPageService) { }

  @Query(() => [CrmPage], { name: 'crmPages' })
  findAll() {
    return this.crmPageService.findAll();
  }
}
