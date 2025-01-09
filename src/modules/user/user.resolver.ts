import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UseGuards, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { Users } from './entities/users.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ParamsGetAll } from './dto/get-all.input';
import { AuthGuard } from '../../common/guards/auth.guard';
import { ValidationPaginationPipe } from 'src/common/pipes/validate-pagination.pipe';

@Resolver(() => User)
@UseGuards(AuthGuard)
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @Mutation(() => User)
  createUser(@Args() args: CreateUserInput) {
    return this.userService.create(args);
  }

  @Query(() => Users, { name: 'users' })
  @UsePipes(new ValidationPaginationPipe(1, 10))
  findAll(@Args() args: ParamsGetAll) {
    return this.userService.findAll(args);
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User, { name: 'updateUser' })
  updateUser(@Args() args: UpdateUserInput) {
    return this.userService.update(args.id, args);
  }

  @Mutation(() => User, { name: 'deleteUser' })
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
