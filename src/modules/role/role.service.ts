import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) { }

  create(createRoleInput: CreateRoleInput) {
    return this.prisma.role.create({
      data: {
        name: createRoleInput.name,
        active: createRoleInput?.active || true,
        permissions: {
          create: createRoleInput.permissions
        }
      }
    })
  }

  findAll() {
    return this.prisma.role.findMany({
      include: {
        permissions: true
      }
    });
  }

  async findOne(id: number) {
    const role = await this.prisma.role.findMany({
      where: {
        id
      },
      include: {
        permissions: true
      }
    });

    if (!role)
      throw new NotFoundException(`Role with ID ${id} not foun`);

    return role;
  }

  async update(id: number, updateRoleInput: UpdateRoleInput) {
    let role = await this.prisma.role.update({
      where: {
        id: id
      },
      data: {
        name: updateRoleInput.name,
        active: updateRoleInput.active,
      }
    })

    console.log('updateRoleInput: ', updateRoleInput.permissions)

    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return this.prisma.role.delete({
      where: {
        id
      },
    });
  }
}
