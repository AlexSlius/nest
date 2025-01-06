import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { CategoryFormation } from './services/category-formation.service';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly formation: CategoryFormation
  ) { }

  create(createCategoryInput: CreateCategoryInput) {
    return this.prisma.category.create({ data: createCategoryInput });
  }

  async findAll() {
    return this.formation.formation(await this.prisma.category.findMany());
  }

  async findOne(id: number) {
    const category = await this.prisma.category.findUnique({
      where: {
        id
      },
      select: {
        id: true
      }
    })

    if (!category)
      throw new NotFoundException(`Category with ID ${id} not foun`)

    return this.formation.formation(await this.prisma.category.findMany(), id);
  }

  async update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return this.prisma.category.update({
      where: {
        id
      },
      data: updateCategoryInput
    })
  }

  async remove(id: number) {
    return this.prisma.category.delete({
      where: {
        id
      }
    })
  }
}
