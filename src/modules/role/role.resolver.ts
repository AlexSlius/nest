import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from './entities/role.entity';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { AuthGuard } from '../../common/guards/auth.guard';

@Resolver(() => Role)
@UseGuards(AuthGuard)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) { }

  @Mutation(() => Role, { name: 'createRole' })
  createRole(@Args() createRoleInput: CreateRoleInput) {
    return this.roleService.create(createRoleInput);
  }

  @Query(() => [Role], { name: 'roles' })
  findAll() {
    return this.roleService.findAll();
  }

  @Query(() => Role, { name: 'role' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.roleService.findOne(id);
  }

  @Mutation(() => Role, { name: 'updateRole' })
  updateRole(@Args() updateRoleInput: UpdateRoleInput) {
    return this.roleService.update(updateRoleInput.id, updateRoleInput);
  }

  @Mutation(() => Role, { name: 'deleteRole' })
  removeRole(@Args('id', { type: () => Int }) id: number) {
    return this.roleService.remove(id);
  }
}
