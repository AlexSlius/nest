import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

import { CreateProductGroup } from './dto/create-product-group.input';
import { UpdateProducGroup } from './dto/update-product-group.input';

@Injectable()
export class ProductGroupService {
    constructor(private readonly prisma: PrismaService) { }

    create(inputData: CreateProductGroup) {
        return this.prisma.productGroup.create({ data: inputData });
    }

    findAll() {
        return this.prisma.productGroup.findMany();
    }

    async findOne(id: number) {
        const productGroup = await this.prisma.productGroup.findUnique({
            where: {
                id
            }
        })

        if (!productGroup)
            throw new BadRequestException(`Product group with ID ${id} not found`)

        return productGroup;
    }

    update(id: number, inputData: UpdateProducGroup) {
        return this.prisma.productGroup.update({
            where: {
                id
            },
            data: inputData
        });
    }

    deleteOne(id: number) {
        return this.prisma.productGroup.delete({
            where: {
                id
            }
        });
    }
}
