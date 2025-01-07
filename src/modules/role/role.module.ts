import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { GetDifferencePermission } from "./services/difference-permission.service";
import { GetDifferencePermissionPage } from "./services/difference-permission-page.service";

@Module({
  providers: [RoleResolver, RoleService, GetDifferencePermission, GetDifferencePermissionPage],
})
export class RoleModule { }
