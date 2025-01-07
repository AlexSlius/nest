import { Query, Resolver } from '@nestjs/graphql';
import { CrmPageService } from './crm-page.service';
import { CrmPage } from './entities/crm-page.entity';

@Resolver()
export class CrmPageResolver {
  constructor(private readonly crmPageService: CrmPageService) { }

  @Query(() => [CrmPage], { name: 'crmPages' })
  findAll() {
    return this.crmPageService.findAll();
  }
}
