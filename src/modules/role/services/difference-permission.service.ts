import { Injectable } from '@nestjs/common';
import { InterfacePermission } from '../interfaces/permissions.interface'

@Injectable()
export class GetDifferencePermission {
    toAdd(userPermissions: InterfacePermission[], dbPermissions: InterfacePermission[]) {
        return userPermissions.filter(
            (userPerm: InterfacePermission) => !dbPermissions.some((dbPerm: InterfacePermission) => dbPerm.id === userPerm.id)
        )
    }

    toDelete(userPermissions: InterfacePermission[], dbPermissions: InterfacePermission[]) {
        return dbPermissions.filter(
            (dbPerm: InterfacePermission) => !userPermissions.some((userPerm: InterfacePermission) => userPerm.id === dbPerm.id)
        );
    }
}