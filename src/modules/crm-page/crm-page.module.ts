import { Module } from '@nestjs/common';
import { CrmPageService } from './crm-page.service';
import { CrmPageResolver } from './crm-page.resolver';

@Module({
  providers: [CrmPageResolver, CrmPageService],
})
export class CrmPagesModule {}
