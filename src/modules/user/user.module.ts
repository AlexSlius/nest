import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PasswordServis } from 'src/common/services/password.service';

@Module({
  providers: [UserResolver, UserService, PasswordServis],
})
export class UserModule {}
