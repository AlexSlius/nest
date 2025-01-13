import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateColor } from './dto/create-color.input';
import { UpdateColor } from './dto/update-color.input';

@Injectable()
export class ColorService {
    constructor(private readonly prisma: PrismaService) { }

    create(createInput: CreateColor) {
        return this.prisma.productColor.create({
            data: createInput
        })
    }

    findAll() {
        return this.prisma.productColor.findMany();
    }

    async findOne(id: number) {
        const color = this.prisma.productColor.findUnique({
            where: {
                id
            }
        })

        if (!color)
            throw new NotFoundException(`Color with ID ${id} not found`);

        return color;
    };

    update(id: number, updateInput: UpdateColor) {
        return this.prisma.productColor.update({
            where: { id },
            data: updateInput
        })
    }

    delete(id: number) {
        return this.prisma.productColor.delete({ where: { id } });
    }
}
