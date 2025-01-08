import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PasswordServis } from 'src/common/services/password.service';

@Module({
  providers: [AuthResolver, AuthService, PasswordServis],
})

export class AuthModule { }
