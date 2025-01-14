import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

import { CreateBrand } from './dto/brand-create.input';
import { UpdateBrand } from './dto/brand-update.input';

@Injectable()
export class BrandService {
    constructor(private readonly prisma: PrismaService) { }

    create(inputData: CreateBrand) {
        return this.prisma.brand.create({ data: inputData });
    }

    findAll() {
        return this.prisma.brand.findMany();
    }

    async findOne(id: number) {
        const brand = await this.prisma.brand.findUnique({
            where: {
                id
            }
        })

        if (!brand)
            throw new BadRequestException(`Brand with ID ${id} not found`)

        return brand;
    }

    update(id: number, inputData: UpdateBrand) {
        return this.prisma.brand.update({
            where: {
                id
            },
            data: inputData
        });
    }

    deleteOne(id: number) {
        return this.prisma.brand.delete({
            where: {
                id
            }
        });
    }
}
