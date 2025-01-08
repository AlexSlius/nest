import { Args, Mutation, Resolver, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Login } from './entities/auth.entity';
import { AuthGuard } from '../../common/guards/auth.guard';
import { UseGuards } from '@nestjs/common';
import { InterfaceContextReq } from "../../interfaces/context-req.interface";

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
  ) { }

  @Mutation(() => Login, { name: 'login' })
  login(
    @Args('email') email: string,
    @Args('password') password: string
  ) {
    return this.authService.login({ email, password })
  }

  @Mutation(() => Boolean, { name: 'logout' })
  @UseGuards(AuthGuard)
  logout(@Context('req') req: InterfaceContextReq) {
    return this.authService.logout(req);
  }
}
