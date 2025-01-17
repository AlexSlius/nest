import { Injectable, BadRequestException } from '@nestjs/common';

import { Createmanufacture } from './dto/create-manufacture.input';
import { UpdateManufacture } from './dto/update-manufacture.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ManufacturerService {
    constructor(private readonly prisma: PrismaService) { }

    create(dataInput: Createmanufacture) {
        return this.prisma.manufacturer.create({
            data: dataInput
        })
    }

    findAll() {
        return this.prisma.manufacturer.findMany()
    }

    async findOne(id: number) {
        const manufacturer = await this.prisma.manufacturer.findUnique({ where: { id } });

        if (!manufacturer)
            throw new BadRequestException(`Manufacturer with ID ${id} not found`);

        return manufacturer;
    }

    update(id: number, dataInput: UpdateManufacture) {
        return this.prisma.manufacturer.update({
            where: { id },
            data: dataInput
        })
    }

    delete(id: number) {
        return this.prisma.manufacturer.delete({
            where: { id }
        })
    }
}
