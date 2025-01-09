import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from 'prisma/prisma.service';
import { CreatePlace } from "./dto/create-place.input";
import { UpdatePlace } from './dto/update-place.input';

@Injectable()
export class PlaceService {
    constructor(
        private readonly prisma: PrismaService,
    ) { }

    create(args: CreatePlace) {
        return this.prisma.place.create({
            data: args
        });
    }

    findAll() {
        return this.prisma.place.findMany();
    }

    async findOne(id: number) {
        const place = await this.prisma.place.findUnique({
            where: {
                id
            }
        })

        if (!place)
            throw new NotFoundException(`Place with ID ${id} not foun`);

        return place;
    }

    update(id: number, args: UpdatePlace) {
        return this.prisma.place.update({
            where: {
                id
            },
            data: args
        })
    }

    delete(id: number) {
        return this.prisma.place.delete({
            where: {
                id
            }
        })
    }
}
