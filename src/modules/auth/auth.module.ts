import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PasswordServis } from 'src/common/services/password.service';

import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'your-secret-key', // замініть на вашу секретну фразу
      signOptions: { expiresIn: '14h' }, // термін дії токена
    }),
  ],
  providers: [AuthResolver, AuthService, PasswordServis],
})
export class AuthModule { }
