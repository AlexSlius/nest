import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { GetDifferencePermission } from './services/difference-permission.service'
import { GetDifferencePermissionPage } from "./services/difference-permission-page.service";
import { InterfacePermission } from './interfaces/permissions.interface';
import { InterfacePermissionPage } from './interfaces/permissions-page.interface';

@Injectable()
export class RoleService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly getDifferencePermission: GetDifferencePermission,
    private readonly getDifferencePermissionPage: GetDifferencePermissionPage
  ) { }

  create(createRoleInput: CreateRoleInput) {
    return this.prisma.role.create({
      data: {
        name: createRoleInput.name,
        active: createRoleInput?.active || true,
        permissions: {
          create: createRoleInput.permissions
        },
        permissionPages: {
          create: createRoleInput.permissionPages
        }
      }
    })
  }

  findAll() {
    return this.prisma.role.findMany({
      include: {
        permissions: true,
        permissionPages: true,
      }
    });
  }

  async findOne(id: number) {
    const role = await this.prisma.role.findMany({
      where: {
        id
      },
      include: {
        permissions: true,
        permissionPages: true,
      }
    });

    if (!role)
      throw new NotFoundException(`Role with ID ${id} not foun`);

    return role;
  }

  async update(id: number, updateRoleInput: UpdateRoleInput) {
    const role = await this.prisma.role.update({
      where: {
        id: id
      },
      data: {
        name: updateRoleInput.name,
        active: updateRoleInput.active,
      },
      select: {
        id: true,
        permissions: true,
        permissionPages: true,
      }
    });

    const toAddPermission: InterfacePermission[] = this.getDifferencePermission.toAdd(updateRoleInput.permissions, role.permissions);
    const toDeletePermission: InterfacePermission[] = this.getDifferencePermission.toDelete(updateRoleInput.permissions, role.permissions);
    const toAddPages: InterfacePermissionPage[] = this.getDifferencePermissionPage.toAdd(updateRoleInput.permissionPages, role.permissionPages);
    const toDeletePages: InterfacePermissionPage[] = this.getDifferencePermissionPage.toDelete(updateRoleInput.permissionPages, role.permissionPages);

    await this.prisma.$transaction((async (prisma) => {
      await Promise.all(toAddPermission.map(perm => {
        delete perm.id;
        return prisma.permission.create({ data: perm });
      }))
      await Promise.all(toDeletePermission.map(perm => prisma.permission.delete({ where: { id: perm.id } })))

      if (updateRoleInput.permissions) {
        const newAndOld = [...toAddPermission, ...toDeletePermission];

        await Promise.all(updateRoleInput.permissions.map(perm => {
          if (!newAndOld.find(el => el.id === perm.id)) {
            return prisma.permission.update({
              where: {
                id: perm.id
              },
              data: perm,
            });
          }

          return null;
        }));
      }
    }))

    await this.prisma.$transaction((async (prisma) => {
      await Promise.all(toAddPages.map(perm => {
        delete perm.id;
        return prisma.permissionPage.create({ data: perm })
      }));
      await Promise.all(toDeletePages.map(perm => prisma.permissionPage.delete({ where: { id: perm.id } })));

      if (updateRoleInput.permissionPages) {
        const newAndOld = [...toAddPages, ...toDeletePages];

        await Promise.all(updateRoleInput.permissionPages.map(perm => {
          if (!newAndOld.find(el => el.id === perm.id)) {
            return prisma.permissionPage.update({
              where: {
                id: perm.id
              },
              data: perm
            })
          }

          return null;
        }))
      }
    }))

    return role;
  }

  remove(id: number) {
    return this.prisma.role.delete({
      where: {
        id
      },
    });
  }
}
