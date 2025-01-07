
import { Injectable } from '@nestjs/common';
import { InterfacePermissionPage } from "../interfaces/permissions-page.interface"

@Injectable()
export class GetDifferencePermissionPage {
    toAdd(userPermissions: InterfacePermissionPage[], dbPermissions: InterfacePermissionPage[]) {
        return userPermissions.filter(
            (userPerm: InterfacePermissionPage) => !dbPermissions.some((dbPerm: InterfacePermissionPage) => dbPerm.id === userPerm.id)
        )
    }

    toDelete(userPermissions: InterfacePermissionPage[], dbPermissions: InterfacePermissionPage[]) {
        return dbPermissions.filter(
            (dbPerm: InterfacePermissionPage) => !userPermissions.some((userPerm: InterfacePermissionPage) => userPerm.id === dbPerm.id)
        );
    }
}