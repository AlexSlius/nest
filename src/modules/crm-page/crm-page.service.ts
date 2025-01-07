import { Injectable } from '@nestjs/common';
import crmPagesForFront from 'src/data/crm-pages-front';
import { InterfacePageFront } from 'src/interfaces/page-front.interface';

@Injectable()
export class CrmPageService {

    findAll(): InterfacePageFront[] {
        return crmPagesForFront;
    }
}
