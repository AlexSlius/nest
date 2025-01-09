import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ParamsGetAll } from './dto/get-all.input';
import { PrismaService } from 'prisma/prisma.service';
import { PasswordServis } from 'src/common/services/password.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly passwordServis: PasswordServis
  ) { }

  async create(createUserInput: CreateUserInput) {
    let user = await this.prisma.user.findFirst({
      where: {
        OR: [
          { email: createUserInput.email },
          { phone: createUserInput.phone },
        ]
      }
    });

    if (user)
      throw new ConflictException(`Користувач з таким телефоном або поштою вже існує`);

    let hashedPassword = await this.passwordServis.hasPassword(createUserInput.password);

    return await this.prisma.user.create({
      data: {
        ...createUserInput,
        password: hashedPassword
      }
    })
  }

  async findAll(args: ParamsGetAll) {
    const {
      pagination: { page, limit },
    } = args;
    const skip = (page - 1) * limit;

    const filtersArr = [
      ...(args?.filter?.email ? [{ email: { startsWith: args.filter.email, mode: 'insensitive' as 'insensitive' } }] : []),
      ...(args?.filter?.phone ? [{ phone: { startsWith: args.filter.phone, mode: 'insensitive' as 'insensitive' } }] : []),
      ...(args?.filter?.name ? [{ name: { startsWith: args.filter.name, mode: 'insensitive' as 'insensitive' } }] : []),
      ...(args?.filter?.cityId ? [{ cityId: args.filter.cityId }] : []),
      ...(args?.filter?.active !== undefined ? [{ active: args.filter.active }] : []),
    ]

    const [data, total] = await Promise.all([
      this.prisma.user.findMany({
        skip,
        take: limit,
        where: {
          AND: filtersArr,
        },
        include: {
          city: true,
          position: true,
          place: true,
          role: {
            include: {
              permissions: true,
              permissionPages: true,
            },
          }
        },
      }),
      this.prisma.user.count({
        where: {
          AND: filtersArr,
        }
      })
    ]);

    return {
      data,
      meta: {
        limit: page,
        page: limit,
        total,
        lastPage: Math.ceil(total / limit)
      }
    }
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        city: true,
        position: true,
        place: true,
        role: {
          include: {
            permissions: true,
            permissionPages: true,
          },
        }
      },
    });

    if (!user)
      throw new NotFoundException(`User with ID ${id} not foun`)

    return user;
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    if (updateUserInput?.password) {
      updateUserInput = {
        ...updateUserInput,
        password: await this.passwordServis.hasPassword(updateUserInput.password),
      };
    }

    return await this.prisma.user.update({
      where: { id },
      data: updateUserInput
    })
  }

  async remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id
      }
    })
  }
}
