import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

import { CreatePosiition } from "./dto/create-position.input";
import { UpdatePosition } from "./dto/update-pocition.input"

@Injectable()
export class PositionService {
    constructor(private readonly prisma: PrismaService) { }

    create(args: CreatePosiition) {
        return this.prisma.position.create({
            data: args
        })
    }

    fildAll() {
        return this.prisma.position.findMany();
    }

    async findOne(id: number) {
        const position = await this.prisma.position.findUnique({
            where: {
                id
            }
        })

        if (!position)
            throw new NotFoundException(`Position with ID ${id} not foun`);

        return position;
    }

    update(id: number, args: UpdatePosition) {
        return this.prisma.position.update({
            where: {
                id
            },
            data: args
        })
    }

    delete(id: number) {
        return this.prisma.position.delete({
            where: {
                id
            }
        })
    }
}
