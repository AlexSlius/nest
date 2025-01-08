import { Module } from '@nestjs/common';

import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { CategoryFormation } from './services/category-formation.service';

@Module({
  providers: [CategoryResolver, CategoryService, CategoryFormation],
})

export class CategoryModule { }
