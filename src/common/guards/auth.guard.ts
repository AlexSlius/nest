import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';

const errorMessage = `unauthorized`;

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const ctx = GqlExecutionContext.create(context);
        const headers = ctx.getContext().req.headers;
        const autorization = headers['authorization'];

        if (!autorization)
            throw new UnauthorizedException(errorMessage);

        const token = autorization.split(' ')[1];

        if (autorization.startsWith('Bearer ') && token.length < 20)
            throw new UnauthorizedException(errorMessage);

        try {
            const decoded: { sub: number } = this.jwtService.verify(token, {
                secret: process.env.JWT_SECRET,
            });

            if (!decoded?.sub) {
                throw new UnauthorizedException(errorMessage);
            }

            const authDb = await this.prisma.auth.findUnique({
                where: {
                    userId: decoded.sub,
                },
                include: {
                    user: {
                        select: {
                            id: true,
                            cityId: true,
                            roleId: true,
                        }
                    }
                }
            });

            if (!authDb || authDb.token !== token) {
                throw new UnauthorizedException(errorMessage);
            }

            // Adding a user to the context
            ctx.getContext().req.user = authDb.user;
        } catch (error) {
            throw new UnauthorizedException(errorMessage);
        }

        return true;
    }
}