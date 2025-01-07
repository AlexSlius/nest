import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Login } from './entities/auth.entity';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }

  @Mutation(() => Login, { name: 'login' })
  login(
    @Args('email') email: string,
    @Args('password') password: string
  ) {
    return this.authService.login({ email, password })
  }

  @Mutation(() => Boolean, { name: 'logout' })
  logout() {
    return this.authService.logout();
  }
}
