import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { GqlArgumentsHost } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';

@Catch(PrismaClientKnownRequestError)
export class PrismaGraphQLExceptionFilter implements ExceptionFilter {
    catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
        const gqlHost = GqlArgumentsHost.create(host);
        const context = gqlHost.getContext();

        if (exception.code === 'P1000') {
            throw new Error('Database connection failure. Please check the database connection.');
        }
        else if (exception.code === 'P2025') {
            throw new NotFoundException('Resource not found / invalid request');
        } else {
            throw new NotFoundException(`Server error ${exception.code}`);
        }
    }
}
