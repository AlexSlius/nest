import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateValueFeatureInput } from './dto/create-value-fature.input';
import { UpdateValueFaatureInput } from './dto/update-value-fature.input';
import { PrismaService } from 'prisma/prisma.service';
import { ValueFeature } from '@prisma/client';

@Injectable()
export class ValueFeatureService {
    constructor(private readonly prisma: PrismaService) { }

    async create(dataValue: CreateValueFeatureInput): Promise<ValueFeature> {
        const isFeature = await this.prisma.feature.findUnique({ where: { id: dataValue.featureId } });

        if (!isFeature)
            throw new BadRequestException(`Feature with ID ${dataValue.featureId} not found`);

        return await this.prisma.valueFeature.create({ data: dataValue });
    }

    fildAll(): Promise<ValueFeature[]> {
        return this.prisma.valueFeature.findMany();
    }

    async findOne(id: number): Promise<ValueFeature> {
        const valueFeature = await this.prisma.valueFeature.findUnique({
            where: { id }
        })

        if (!valueFeature)
            throw new BadRequestException(`Value feature with ID ${id} not found`);

        return valueFeature;
    }

    async update(id: number, dataValue: UpdateValueFaatureInput): Promise<ValueFeature> {
        if (dataValue.featureId) {
            const isFeature = await this.prisma.feature.findUnique({ where: { id: dataValue.featureId } });

            if (!isFeature)
                throw new BadRequestException(`Feature with ID ${dataValue.featureId} not found`);
        }

        return await this.prisma.valueFeature.update({
            where: {
                id
            },
            data: dataValue
        });
    }

    delete(id: number): Promise<ValueFeature> {
        return this.prisma.valueFeature.delete({ where: { id } });
    }
}
