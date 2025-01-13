import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

import { CreateComposition } from './dto/create-composition.input';
import { UpdateComposition } from './dto/update-composition.input';

@Injectable()
export class CompositionService {
    constructor(private readonly prisma: PrismaService) { }

    async create(createCompositionInput: CreateComposition) {
        const city = await this.prisma.city.findUnique({ where: { id: createCompositionInput.cityId } });

        if (!city)
            throw new Error(`City with ID ${createCompositionInput.cityId} does not exist`);

        return await this.prisma.composition.create({
            data: {
                name: createCompositionInput.name,
                active: createCompositionInput.active,
                city: {
                    connect: {
                        id: createCompositionInput.cityId
                    }
                }
            }
        });
    }

    findAll() {
        return this.prisma.composition.findMany({
            include: {
                city: true
            }
        })
    }

    async findOne(id: number) {
        const composition = this.prisma.composition.findUnique({
            where: {
                id
            },
            include: {
                city: true
            }
        })

        if (!composition)
            throw new NotFoundException(`Compostion with ID ${id} not found`)

        return composition;
    }

    update(id: number, updateCompositionInput: UpdateComposition) {
        return this.prisma.composition.update({
            where: {
                id
            },
            data: updateCompositionInput
        })
    }

    delete(id: number) {
        return this.prisma.composition.delete({
            where: { id }
        })
    }
}
