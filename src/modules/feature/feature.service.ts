import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFeatureInput } from './dto/create-feature.input';
import { UpdateFeatureInput } from './dto/update-feature.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class FeatureService {
  constructor(private readonly prisma: PrismaService) { }

  create(createFeatureInput: CreateFeatureInput) {
    return this.prisma.feature.create({ data: createFeatureInput });
  }

  findAll() {
    return this.prisma.feature.findMany();
  }

  async findOne(id: number) {
    const featcure = await this.prisma.feature.findUnique({
      where: {
        id
      }
    })

    if (!featcure)
      throw new BadRequestException(`Feachure with ID ${id} not found`)

    return featcure;
  }

  update(id: number, updateFeatureInput: UpdateFeatureInput) {
    return this.prisma.feature.update({
      where: { id },
      data: updateFeatureInput
    });
  }

  remove(id: number) {
    return this.prisma.feature.delete({ where: { id } });
  }
}
