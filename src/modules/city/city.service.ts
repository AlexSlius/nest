import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCityInput } from './dto/create-city.input';
import { UpdateCityInput } from './dto/update-city.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) { }

  create(createCityInput: CreateCityInput) {
    return this.prisma.city.create({
      data: createCityInput
    });
  }

  findAll() {
    return this.prisma.city.findMany();
  }

  async findOne(id: number) {
    const city = await this.prisma.city.findUnique({
      where: {
        id
      },
      include: {
        places: true,
      },
    })

    if (!city)
      throw new NotFoundException(`City with ID ${id} not foun`)

    return city;
  }

  async update(id: number, updateCityInput: UpdateCityInput) {
    return !!(await this.prisma.city.update(
      {
        data: updateCityInput,
        where: { id }
      },
    ))?.id
  }

  async remove(id: number) {
    return !!(await this.prisma.city.delete({
      where: {
        id
      }
    }))
  }
}
