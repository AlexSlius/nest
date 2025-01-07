export interface InterfacePermission {
    id?: number
    resource: string;
    active?: boolean;
    allowedCreate: boolean;
    allowedUpdate: boolean;
    allowedDelete: boolean;
    allowedGetOne: boolean;
    allowedGetAll: boolean;
    roleId: number;
}