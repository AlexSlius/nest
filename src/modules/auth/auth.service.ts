import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { PasswordServis } from 'src/common/services/password.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly passwordServis: PasswordServis,
        private readonly jwtService: JwtService
    ) { }

    async login({ email, password }: { email: string, password: string }) {
        const user = await this.prisma.user.findUnique({
            where: { email },
            include: {
                city: true,
                role: {
                    include: {
                        permissions: true,
                        permissionPages: true,
                    },
                }
            },
        })

        if (!user)
            throw new UnauthorizedException(`Користувача з поштою ${email} не знайдено, зверніться до адміністратора`);

        const isTheSame = await this.passwordServis.comparePassword(password, user.password);

        if (!isTheSame)
            throw new UnauthorizedException(`Ваш пароль не вірний, зверніться до адміністратора`);

        const payload = { sub: user.id };
        const token = this.jwtService.sign(payload);

        await this.prisma.auth.upsert({
            where: {
                userId: user.id,
            },
            update: {
                token: token,
            },
            create: {
                token: token,
                userId: user.id
            }
        })

        return {
            token: token,
            user
        };
    }

    logout(): boolean {
        return true;
    }
}
